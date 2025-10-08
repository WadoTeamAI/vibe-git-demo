// シンプルなアプリケーション
console.log("Hello, Vibe Coding!");

function greet(name) {
  return `Welcome, ${name}!`;
}

module.exports = { greet };

// ログイン画面のUI
function LoginScreen() {
  return {
    render: function() {
      console.log("=== Login Screen ===");
      console.log("Username: _________");
      console.log("Password: _________");
      console.log("[  Login Button  ]");
    },
    validate: function(username, password) {
      if (username.length < 3) {
        return "Username must be at least 3 characters";
      }
      if (password.length < 8) {
        return "Password must be at least 8 characters";
      }
      return "Valid";
    }
  };
}

module.exports.LoginScreen = LoginScreen;
