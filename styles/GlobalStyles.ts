import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f0f2f5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .future-social {
    min-height: 100vh;
  }

  .feed-container {
    max-width: 680px;
    margin: 20px auto;
    padding: 0 15px;
  }

  .create-post {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  .post-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 20px;
    margin-bottom: 10px;
  }

  .post-button {
    background: #1877f2;
    color: white;
    border: none;
    padding: 8px 20px;
    border-radius: 6px;
    cursor: pointer;
  }

  .post {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
  }

  .post-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .profile-pic {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .post-content {
    margin: 15px 0;
  }

  .post-actions {
    display: flex;
    gap: 10px;
    border-top: 1px solid #ddd;
    padding-top: 10px;
  }

  .post-actions button {
    flex: 1;
    padding: 8px;
    background: none;
    border: none;
    cursor: pointer;
    color: #65676b;
    font-weight: 600;
    
    &:hover {
      background: #f0f2f5;
      border-radius: 4px;
    }
  }
`;

export default GlobalStyles;
