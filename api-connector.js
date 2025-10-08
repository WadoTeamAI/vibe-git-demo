// API接続機能
// feature/api-connectブランチで開発中

class APIConnector {
  constructor(baseURL) {
    this.baseURL = baseURL || 'https://api.vibecoding.com';
    this.timeout = 5000;
    this.headers = {
      'Content-Type': 'application/json',
      'User-Agent': 'VibeCoding-Client/1.0'
    };
  }

  setAuthToken(token) {
    this.headers['Authorization'] = `Bearer ${token}`;
  }

  async get(endpoint) {
    console.log(`🔄 GET ${this.baseURL}${endpoint}`);
    
    try {
      // シミュレーション
      await this.delay(500);
      return {
        success: true,
        data: { message: 'GET request successful', endpoint },
        status: 200
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  async post(endpoint, data) {
    console.log(`🔄 POST ${this.baseURL}${endpoint}`);
    console.log('📤 Data:', JSON.stringify(data, null, 2));
    
    try {
      await this.delay(700);
      return {
        success: true,
        data: { message: 'POST request successful', received: data },
        status: 201
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  async put(endpoint, data) {
    console.log(`🔄 PUT ${this.baseURL}${endpoint}`);
    
    try {
      await this.delay(600);
      return {
        success: true,
        data: { message: 'PUT request successful', updated: data },
        status: 200
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  async delete(endpoint) {
    console.log(`🔄 DELETE ${this.baseURL}${endpoint}`);
    
    try {
      await this.delay(500);
      return {
        success: true,
        data: { message: 'DELETE request successful' },
        status: 204
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  handleError(error) {
    console.error('❌ API Error:', error.message);
    return {
      success: false,
      error: error.message,
      status: error.status || 500
    };
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // ヘルスチェック
  async healthCheck() {
    console.log('🏥 Checking API health...');
    const result = await this.get('/health');
    
    if (result.success) {
      console.log('✅ API is healthy!');
    } else {
      console.log('❌ API is down!');
    }
    
    return result;
  }
}

module.exports = APIConnector;
