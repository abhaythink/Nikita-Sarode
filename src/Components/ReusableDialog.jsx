import React from "react";
import "./dialog.css";

const ReusableDialog = ({
  open,
  title,
  children,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
  showFooter = true,
}) => {
  if (!open) return null;

  return (
    <div className="dialog">
      <div className="dialog-container">
        
        <div className="dialog-header">
          <h3>{title}</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="dialog-body">
          {children}
        </div>
        
        {showFooter && (
          <div className="dialog-footer">
            <button className="" onClick={onClose}>
              {cancelText}
            </button>
            <button className="" onClick={onConfirm}>
              {confirmText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReusableDialog;
