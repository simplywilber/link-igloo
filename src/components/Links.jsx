export default function Links() {
    return (
        <div>
        <ul className="flex flex-col gap-7">
          <div className="fancy-btn w-[300px] dark:bg-gray-500 dark:text-white">
          <a href="https://simplywilber.com" target="_blank" className="flex items-center"><i className="fa-solid fa-globe mr-[5%]"></i> <p>Portfolio</p></a>
          </div>
          <li className="fancy-btn w-[300px] dark:bg-gray-500 dark:text-white">
          <a href="https://github.com/simplywilber" target="_blank" className="flex items-center"><i className="fa-brands fa-github mr-[5%]"></i> <p>Github</p></a>
          </li>
          <li className="fancy-btn w-[300px] dark:bg-gray-500 dark:text-white">
          <a href="https://www.linkedin.com/in/wilber-amaya-maurisio/" target="_blank" className="flex items-center"><i className="fa-brands fa-linkedin mr-[5%]"></i> <p>Linkedin</p></a>
          </li>
          <li className="fancy-btn w-[300px] dark:bg-gray-500 dark:text-white">
          <a href="https://discord.com/users/894012643004801045" target="_blank" className="flex items-center"><i className="fa-brands fa-discord mr-[5%]"></i> <p>Discord</p></a>
          </li>
          <li className="fancy-btn w-[300px] dark:bg-gray-500 dark:text-white">
          <a href="https://www.instagram.com/simplywilber" target="_blank" className="flex items-center"><i className="fa-brands fa-instagram mr-[5%]"></i> <p>Instagram</p></a>
          </li>
        </ul>
      </div>
    )
}