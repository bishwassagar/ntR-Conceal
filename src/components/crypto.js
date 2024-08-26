// Utility to convert a string to an ArrayBuffer
function stringToArrayBuffer(str) {
    return new TextEncoder().encode(str);
}

// Utility to convert an ArrayBuffer to a string
function arrayBufferToString(buffer) {
    return new TextDecoder().decode(buffer);
}

// Generate an AES-GCM key from a passphrase using PBKDF2
export async function generateKey(passphrase) {
    const keyMaterial = await window.crypto.subtle.importKey(
        "raw",
        stringToArrayBuffer(passphrase),
        "PBKDF2",
        false,
        ["deriveKey"]
    );

    return await window.crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: stringToArrayBuffer("some-constant-salt"), // Replace with a better salt handling in production
            iterations: 100000,
            hash: "SHA-256"
        },
        keyMaterial,
        {
            name: "AES-GCM",
            length: 256
        },
        false,
        ["encrypt", "decrypt"]
    );
}

// Encrypt the file and append .ntrConceal extension
export async function encryptFile(key, file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.onload = async function(event) {
            try {
                const iv = window.crypto.getRandomValues(new Uint8Array(12));
                const fileNameWithExtension = file.name.split('.');
                const extension = fileNameWithExtension.pop(); // Extract extension
                const fileName = fileNameWithExtension.join('.');

                // Encrypt the file content
                const encryptedContent = await window.crypto.subtle.encrypt(
                    { name: "AES-GCM", iv: iv },
                    key,
                    event.target.result
                );

                // Combine IV, extension, and encrypted content
                const combinedData = new Uint8Array(iv.length + extension.length + 1 + encryptedContent.byteLength);
                combinedData.set(iv, 0);
                combinedData.set(stringToArrayBuffer(extension), iv.length);
                combinedData.set([0], iv.length + extension.length); // Add null separator
                combinedData.set(new Uint8Array(encryptedContent), iv.length + extension.length + 1);

                const blob = new Blob([combinedData]);
                const url = URL.createObjectURL(blob);

                const encryptedFileName = `${fileName}.ntrConceal`;
                const a = document.createElement('a');
                a.href = url;
                a.download = encryptedFileName;
                a.click();

                resolve();
            } catch (error) {
                reject(error);
            }
        };

        fileReader.readAsArrayBuffer(file);
    });
}

// Decrypt the file and restore the original extension
export async function decryptFile(key, file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.onload = async function(event) {
            try {
                const data = new Uint8Array(event.target.result);
                const iv = data.slice(0, 12); // Extract the IV
                const separatorIndex = data.indexOf(0, 12); // Find the separator (null byte)
                const extension = arrayBufferToString(data.slice(12, separatorIndex)); // Extract the file extension
                const encryptedContent = data.slice(separatorIndex + 1); // Extract the encrypted content

                const decryptedContent = await window.crypto.subtle.decrypt(
                    { name: "AES-GCM", iv: iv },
                    key,
                    encryptedContent
                );

                const blob = new Blob([decryptedContent]);
                const url = URL.createObjectURL(blob);
                const originalFileName = file.name.replace(".ntrConceal", `.${extension}`);
                const a = document.createElement('a');
                a.href = url;
                a.download = originalFileName;
                a.click();

                resolve();
            } catch (error) {
                reject(error);
            }
        };

        fileReader.readAsArrayBuffer(file);
    });
}