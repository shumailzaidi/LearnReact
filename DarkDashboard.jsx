// src/DarkDashboard.js
import React from 'react';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
const DarkDashboard = () => {
  // Define basic styles inspired by the image
  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#1a1a1a', // Very Dark Background
      color: '#f0f0f0', // Light Text
    },
    sidebar: {
      width: '60px',
      backgroundColor: '#2c2c2c', // Sidebar Dark Gray
      paddingTop: '20px',
      boxShadow: '2px 0 5px rgba(0, 0, 0, 0.5)',
      // Minimal styling for sidebar icons
      '& div': {
        textAlign: 'center', 
        padding: '15px 0', 
        fontSize: '20px', 
        cursor: 'pointer'
      }
    },
    mainContent: {
      flexGrow: 1,
      padding: '40px',
      // Subtle orange/yellow background gradient matching the image
      background: 'linear-gradient(to bottom right, #1a1a1a 80%, #ffc10715)', 
    },
    card: {
      backgroundColor: '#242424', // Darker Card Background
      borderRadius: '8px',
      padding: '30px',
      marginBottom: '30px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
      border: '1px solid #3c3c3c',
    },
    inputField: {
      height: '60px',
      width: '100%',
      backgroundColor: '#3a3a3a',
      borderRadius: '4px',
      border: 'none',
      padding: '0 15px',
      fontSize: '18px',
      color: '#f0f0f0',
      outline: 'none',
      // Orange glow effect
      boxShadow: '0 0 0 1px #ff8c0050', 
      transition: 'box-shadow 0.2s',
    },
    buttonContainer: {
        marginTop: '20px', 
        padding: '10px 0',
        display: 'flex', 
        justifyContent: 'flex-start' 
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#ff8c00', // Primary Action Color
      color: '#1a1a1a',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'background-color 0.2s',
      '&:hover': {
        backgroundColor: '#ffa000'
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* 1. Sidebar */}
      <div style={styles.sidebar}>
        {/* Simplified Icon placeholders */}
        <div style={styles.sidebar['& div']}><i class="fa-solid fa-house"></i></div> 
        <div style={styles.sidebar['& div']}>⚙️</div>
        <div style={styles.sidebar['& div']}>📁</div>
        <div style={styles.sidebar['& div']}>&gt;</div>
      </div>

      {/* 2. Main Content Area */}
      <div style={styles.mainContent}>
        <h2>Leverage Firebase's GenAI Capabilities</h2>
        <p>A professional and streamlined control panel for your AI tools.</p>

        {/* 3. Main Input Card (like the large rectangle in the image) */}
        <div style={styles.card}>
          {/* Main input area */}
          <input 
            type="text" 
            placeholder="Enter your prompt or query here..." 
            style={styles.inputField} 
          />
          
          {/* 4. Smaller Box/Button Area (like the small rectangle) */}
          <div style={styles.buttonContainer}>
            <button style={styles.button}>
              Run AI Command
            </button>
          </div>
        </div>

        {/* 5. Additional Card */}
        <div style={{...styles.card, padding: '20px'}}>
          <h3>Project Status</h3>
          <p>All AI models operational. Ready for execution.</p>
        </div>
      </div>
    </div>
  );
};

export default DarkDashboard;