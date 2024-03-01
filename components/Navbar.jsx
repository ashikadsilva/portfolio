import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between ">
        <Link to="/">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
            {/* <img className="w-14" src={logo} alt="Logo" /> */}
          </motion.div>
        </Link>
        <div className="hidden mdl:inline-flex items-center gap-1">
          <ul className="grid"> {/* Use the grid class for horizontal layout */}
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              to="#home" >
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1 }}>
                Home
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              to="#about" >
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.1 }}>
                <span className="text-textGreen">01.</span>
                About
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              to="#experience">
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.2 }}>
                <span className="text-textGreen">02.</span>
                Experience
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              to="#project">
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.2 }}>
                <span className="text-textGreen">03.</span>
                Project
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              to="#contact">
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.2 }}>
                <span className="text-textGreen">04.</span>
                Contact
              </motion.li>
            </Link>
          </ul>
          <a to="/assets/noor_resume.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;