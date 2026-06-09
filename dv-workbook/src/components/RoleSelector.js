import React from 'react';
import { Heart, Badge, Users, Church } from 'lucide-react';
import '../styles/RoleSelector.css';

function RoleSelector({ onRoleSelect }) {
  const roles = [
    {
      id: 'Healthcare Provider',
      title: 'Healthcare Provider',
      description: 'Doctors, nurses, mental health professionals',
      icon: Heart,
      color: '#1e9ab4'
    },
    {
      id: 'Law Enforcement',
      title: 'Law Enforcement',
      description: 'Police, detectives, public safety professionals',
      icon: Badge,
      color: '#fe6410'
    },
    {
      id: 'Social Worker',
      title: 'Social Worker',
      description: 'Caseworkers, advocates, child welfare professionals',
      icon: Users,
      color: '#f6538c'
    },
    {
      id: 'Faith Leader',
      title: 'Faith Leader',
      description: 'Clergy, spiritual directors, faith community organizers',
      icon: Church,
      color: '#fd2b60'
    }
  ];

  return (
    <div className="role-selector-container">
      {/* Header */}
      <div className="role-header">
        <div className="header-bar">
          <div className="header-bar-inner"></div>
        </div>
        <h1>Select Your Role</h1>
        <p className="role-subheader">Your answers will be tailored to your professional context</p>
      </div>

      {/* Roles Grid */}
      <div className="roles-container">
        <div className="roles-grid">
          {roles.map(role => {
            const IconComponent = role.icon;
            return (
              <button
                key={role.id}
                className="role-card"
                onClick={() => onRoleSelect(role.id)}
                style={{ '--role-color': role.color }}
              >
                <div className="role-card-header">
                  <div className="role-icon-wrapper">
                    <IconComponent size={32} color={role.color} />
                  </div>
                  <div className="role-accent-bar"></div>
                </div>

                <div className="role-card-content">
                  <h3>{role.title}</h3>
                  <p>{role.description}</p>
                </div>

                <div className="role-card-footer">
                  <span className="select-indicator">→ Select</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Message */}
      <div className="role-footer">
        <p>Your selection personalizes every question and recommendation in this workbook</p>
      </div>
    </div>
  );
}

export default RoleSelector;
