import React from 'react';
import Radium from 'radium';

const s = {
  alerts: {
    padding: 0,
    marginBottom: '2em',
    alert: {
      boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
      marginBottom: '0.5em',
      position: 'relative',
      overflow: 'hidden',
      padding: '1em 1.5em',
      border: 0,
      borderLeftWidth: '3px',
      borderStyle: 'solid',
      borderRadius: '3px',
      color: '#444',
      borderLeft: '3px solid #444',
      background: '#fafafa',
      heading: {
        fontWeight: 'bold'
      },
      content: {
        margin: 0
      }
    },
    info: {
      borderColor: '#0055BA'
    },
    warning: {
      color: '#3F3F2B',
      borderColor: '#FFBE00'
    },
    error: {
      background: '#FFEFBF',
      borderColor: '#FF4100'
    }
  },
};

const Alerts = ({items}) => {

  const getAlertClassName = (type) => {
    switch (type) {
      case 'info':
        return s.alerts.info;
      case 'error':
        return s.alerts.error;
      case 'warning':
        return s.alerts.warning;
      default:
        return;
    }
  };

  return (
    <ul style={s.alerts}>
      {items && items.length > 0 && items.map((row, i) => {
        return (
          <li style={[s.alerts.alert, getAlertClassName(row.type)]} key={i} >
            <span style={s.alerts.alert.heading}>{row.heading}</span>
            <p style={s.alerts.alert.content}>{row.content}</p>
          </li>
        );
      }) }
    </ul>
  );
};

module.exports = Radium(Alerts);
