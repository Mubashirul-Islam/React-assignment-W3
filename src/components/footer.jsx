function Footer() {
  return (
    <footer className="dark:bg-blue-700 bg-orange-300 py-2 font-mono transition">
      <div className="text-center">
        <p className="text-gray-100 text">Made with ❤️ by Md. Mubashirul Islam</p>
        <p className="text-gray-100 text-sm mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
        <div className="mt-2">
          <a href="https://github.com/Mubashirul-Islam" className="text-gray-100 mx-2 hover:text-gray-300">GitHub</a>
          <a href="https://www.linkedin.com/in/md-mubashirul-islam/" className="text-gray-100 mx-2 hover:text-gray-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;