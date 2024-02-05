export default function ProfileCard() {
  return (
    <div>
      {" "}
      <div className="flex flex-col m-5 gap-4 fancy-background sm:flex-row sm:w-[725px] dark:bg-gray-500 dark:text-white">
        {/* User profile picture with link on click */}
        <div className="w-fit self-center p-2 shadow shadow-2xl border rounded-full transition hover:scale-[1.07]">
          <a href="https://simplywilber.com" target="_blank">
            <img
              src="/images/me.png"
              height={150}
              width={150}
              alt="A picture of me, Wilber, celebrating in Busan, South Korea"
              className="rounded-full"
            />
          </a>
        </div>
        {/* Start of profile description */}
        <div className="flex flex-col text-center gap-2 p-6 sm:text-start sm:p-2">
          {" "}
          <div>
            <p>
              Welcome to my igloo{" "}
              <i className="fa-solid fa-igloo fa-bounce ml-1"></i>
            </p>
            <div className="border-y border-gray-700 my-1 py-4 sm:border-l sm:border-y-0 sm:pl-2 sm:my-1 sm:py-0">
              <p>
                My name is Wilber Amaya-Maurisio, and I'm a Full Stack Developer
              </p>
              <p>
                I have pivoted my career from the military to the dynamic world
                of programming, turning a longstanding dream into reality. What
                a journey 🐧 ❄️
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-between sm:justify-normal">
            <div>
              <a href="https://www.instagram.com/simplywilber" target="_blank">
                <p className="underline">@simplywilber</p>{" "}
              </a>
            </div>
            <div>
              <a href="https://simplywilber.com" target="_blank">
                <p className="underline">simplywilber.com</p>{" "}
              </a>
            </div>
            <div>
              <a
                href="https://www.buymeacoffee.com/simplywilber"
                target="_blank"
                className="flex items-center gap-1"
              >
                {" "}
                <i className="fa-solid fa-mug-hot text-sm"></i>
                <p className="underline">Buy me café </p>
              </a>
            </div>
          </div>
        </div>
        {/* End of profile description */}
      </div>
    </div>
  );
}
