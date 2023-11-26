import React, { useState } from 'react';

const ForgotPasswordModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = () => {

    };

    return (
        <div className={`modal ${isOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Forgot Password</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <button type="button" className="btn btn-primary mt-2" onClick={handleForgotPassword}>
                                Send Reset Email
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordModal;
