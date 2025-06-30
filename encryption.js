document.addEventListener("DOMContentLoaded", () => {
  // Encryption Elements
  const encryptBtn = document.getElementById("encryptBtn");
  const encryptKeyInput = document.getElementById("encryptKey");
  const passwordToEncryptInput = document.getElementById("passwordToEncrypt");
  const encryptResultContainer = document.getElementById(
    "encryptResultContainer"
  );
  const encryptedResult = document.getElementById("encryptedResult");
  const copyEncryptBtn = document.getElementById("copyEncryptBtn");

  // Decryption Elements
  const decryptBtn = document.getElementById("decryptBtn");
  const decryptKeyInput = document.getElementById("decryptKey");
  const encryptedPasswordInput = document.getElementById("encryptedPassword");
  const decryptResultContainer = document.getElementById(
    "decryptResultContainer"
  );
  const decryptedResult = document.getElementById("decryptedResult");
  const copyDecryptBtn = document.getElementById("copyDecryptBtn");

  // Event Listeners
  encryptBtn.addEventListener("click", handleEncryption);
  decryptBtn.addEventListener("click", handleDecryption);
  copyEncryptBtn.addEventListener("click", () =>
    copyToClipboard(encryptedResult, copyEncryptBtn)
  );
  copyDecryptBtn.addEventListener("click", () =>
    copyToClipboard(decryptedResult, copyDecryptBtn)
  );

  function handleEncryption() {
    const key = encryptKeyInput.value.trim();
    const password = passwordToEncryptInput.value.trim();

    if (!key || !password) {
      showAlert("Please enter both master key and password", "error");
      return;
    }

    try {
      // Encrypt with AES-256-CBC
      const encrypted = encryptAES(password, key);
      encryptedResult.textContent = encrypted;
      encryptResultContainer.classList.remove("hidden");
      showAlert("Password encrypted successfully!", "success");
    } catch (error) {
      console.error("Encryption error:", error);
      showAlert("Error during encryption. Please check your inputs.", "error");
    }
  }

  function handleDecryption() {
    const key = decryptKeyInput.value.trim();
    const encryptedText = encryptedPasswordInput.value.trim();

    if (!key || !encryptedText) {
      showAlert("Please enter both master key and encrypted password", "error");
      return;
    }

    try {
      // Decrypt with AES-256-CBC
      const decrypted = decryptAES(encryptedText, key);
      decryptedResult.textContent = decrypted;
      decryptResultContainer.classList.remove("hidden");
      showAlert("Password decrypted successfully!", "success");
    } catch (error) {
      console.error("Decryption error:", error);
      showAlert(
        "Error during decryption. Please check your key and encrypted text.",
        "error"
      );
    }
  }

  function encryptAES(text, key) {
    return CryptoJS.AES.encrypt(text, key).toString();
  }

  function decryptAES(text, key) {
    return CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
  }

  function copyToClipboard(element, button) {
    const text = element.textContent;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        const originalText = button.textContent;
        button.textContent = "Copied!";
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
        showAlert("Failed to copy text to clipboard", "error");
      });
  }

  function showAlert(message, type) {
    alert(`${type.toUpperCase()}: ${message}`);
  }
});
