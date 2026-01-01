import React from 'react';

const DashboardLayout = ({children, assignment, notifications, quize}) => {
    return (
        <>
            {children}
        <div>
            {assignment}
            {notifications}
            {quize}
        </div>
        </>
    );
};

export default DashboardLayout;