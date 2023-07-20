// import React, { Component } from 'react';
// import { ToastContainer, toast } from 'react-toastify';

// class ErrorBoundary extends Component {
//   state = {
//     hasError: false,
//   };

//   componentDidCatch(error, info) {
//     toast.error('Ha habido un ' + error + ', aquí hay más información: ' + info);
//     // Aquí podrías registrar el error en un servicio de seguimiento de errores
//     // o mostrar un mensaje amigable al usuario.
//     this.setState({ hasError: true });
//   }

//   render() {
//     if (this.state.hasError) {
//       return  <ToastContainer
//       position="top-right"
//       autoClose={3000}
//       closeOnClick
//       theme="dark"
//     />;
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
