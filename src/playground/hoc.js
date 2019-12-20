// Higher order component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state






// import React from 'react';
// import ReactDOM from 'react-dom';


// const Info = (props) => (
//     <div>
//         <h1>Info</h1>
//         <h2>Why this ain't printing </h2>
//         <p>the info is: {props.info}</p>
//     </div>
// );



// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAdmin && <p>private  one</p>}
//             <WrappedComponent {...props} />
//         </div>
//     );
// };


// const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} />, document.getElementById('root'));

