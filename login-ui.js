// ログインUI機能
// feature/login-uiブランチで開発中

class LoginUI {
  constructor() {
    this.username = '';
    this.password = '';
  }

  render() {
    console.log("\n╔═══════════════════════════════╗");
    console.log("║     Vibe Coding Login UI      ║");
    console.log("╚═══════════════════════════════╝");
    console.log("");
    console.log("  Username: ___________________");
    console.log("  Password: ___________________");
    console.log("");
    console.log("  [ Login ]  [ Cancel ]");
    console.log("");
  }

  setCredentials(username, password) {
    this.username = username;
    this.password = password;
  }

  validate() {
    const errors = [];
    
    if (this.username.length < 3) {
      errors.push("⚠️  Username must be at least 3 characters");
    }
    
    if (this.password.length < 8) {
      errors.push("⚠️  Password must be at least 8 characters");
    }

    if (!/[A-Z]/.test(this.password)) {
      errors.push("⚠️  Password must contain at least one uppercase letter");
    }

    if (!/[0-9]/.test(this.password)) {
      errors.push("⚠️  Password must contain at least one number");
    }

    return {
      isValid: errors.length === 0,
      errors: errors
    };
  }

  login() {
    const validation = this.validate();
    
    if (validation.isValid) {
      console.log("✅ Login successful!");
      return true;
    } else {
      console.log("❌ Login failed:");
      validation.errors.forEach(error => console.log(error));
      return false;
    }
  }
}

module.exports = LoginUI;
