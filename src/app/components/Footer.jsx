import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center justify-center gap-20">
            <a href="#" aria-label="GitHub repository">
              <FiGithub className="footer-icon" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FiLinkedin className="footer-icon" />
            </a>
            <a href="#" aria-label="Email">
              <FiMail className="footer-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-gray-200 pb-8 text-center">
        <p className="text-xs text-gray-500">
          © 2025 FinDash. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
