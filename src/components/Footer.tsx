import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer aria-label='footer' className="bg-red-900 p-4 mt-8">
      <div className="container mx-auto text-center text-white ">
        <p data-testid="footer-copyright">&copy; 2023 GeekWorm. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
