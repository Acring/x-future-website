const Feature = ({ featureText }) => {
  return (
    <li className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flex-shrink-0 w-4 h-4 mt-1.5 mr-2 text-gray-700 md:h-4 md:w-4"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <div>{featureText}</div>
    </li>
  );
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:pb-32 bg-gradient-to-t from-sky-300 to-sky-100">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100 md:mb-28">
          <div className="max-w-3xl mx-auto md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-black rounded-lg bg-[#bbd0dd] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40 mb-4">
              谈谈价格
            </div>
            <h2 className="mb-5 text-3xl font-semibold text-gray-800 md:text-5xl">
              为了持续的创新，也是为了更好的体验
            </h2>
            <p className="text-xl md:text-2xl">
              但是相比割韭菜的收费方式，我们更愿意选择一种更加合理的方式，让你的每一分钱都花在刀刃上。
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 mt-12 md:mt-0 xl:grid-cols-3">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="flex flex-col h-full p-6 space-y-4 bg-white bg-opacity-75 border border-white border-opacity-75 shadow-xl undefined rounded-xl md:space-y-6 md:p-8">
              <div className="flex items-center justify-center">
                <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl"></h4>
              </div>
              <h5 className="text-xl font-semibold text-center text-gray-800">
                <div>39.9元 / 月</div>
              </h5>
              <hr className="border-t border-gray-300" />
              <ul className="flex-grow pb-8 space-y-2 md:space-y-4 md:pb-10 md:text-lg">
                <Feature featureText="chatgpt-3.5 无限使用" />
                <Feature featureText="chatgpt-4 每天 5 次" />
                <Feature featureText="Midjourney 绘图 10次" />
              </ul>
              <a
                href="https://x.x-future.shop?triggerPrice=true"
                className="px-5 py-2 font-semibold text-gray-800 transition ease-in-out transform bg-white rounded-full shadow-md bg-opacity-70 hover:-translate-y-0.5 hover:bg-opacity-100 focus:outline-none"
              >
                立即购买
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mb-0.5 inline h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="flex flex-col h-full p-6 space-y-4 transform bg-white border border-white border-opacity-50 shadow-2xl rounded-xl bg-opacity-90 md:space-y-6 md:p-8 xl:scale-110">
              <p className="absolute top-0 w-1/2 px-4 py-1 text-sm font-semibold text-center transform -translate-x-1/2 -translate-y-4 rounded-full left-1/2 bg-sky-500 text-sky-100">
                最受欢迎
              </p>
              <div className="flex items-center justify-center">
                <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl">正式会员</h4>
              </div>
              <h5 className="text-xl font-semibold text-center text-gray-800">
                <div>120元 / 月</div>
                <div className="mt-4 text-base font-normal text-gray-700">
                  如果你觉得我们的产品对你有帮助，可以选择这个版本
                </div>
              </h5>
              <hr className="border-t border-gray-300" />
              <ul className="flex-grow pb-8 space-y-2 md:space-y-4 md:pb-10 md:text-lg">
                <Feature featureText="chatgpt 3.5 无限量使用" />
                <Feature featureText="gpt 4 无限量使用" />
                <Feature featureText="midjourney 绘图无限量使用" />
                <Feature featureText="更多功能持续更新（去除图片背景,绘图高清化，生成 4k 高清图,bilibili 视频总结插件，文章编辑插件，GPT 4）" />
              </ul>
              <a
                href="https://x.x-future.shop?triggerPrice=true"
                className="px-5 py-2 font-semibold text-gray-100 transition duration-300 ease-in-out transform rounded-full shadow bg-gradient-to-t from-sky-800 to-sky-600 hover:-translate-y-1 hover:shadow-lg focus:outline-none"
              >
                立即购买
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mb-0.5 inline h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="flex flex-col h-full p-6 space-y-4 bg-white bg-opacity-75 border border-white border-opacity-75 shadow-xl undefined rounded-xl md:space-y-6 md:p-8">
              <div className="flex items-center justify-center">
                <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl">Enterprise</h4>
              </div>
              <h5 className="text-xl font-semibold text-center text-gray-800">
                <div>按年付费</div>
                <div className="mt-4 text-base font-normal text-gray-700">
                  我们不希望你在没有确定的情况下就购买这个版本，所以暂时不会开放，将来的会给长期使用的用户开放。
                </div>
              </h5>
              <hr className="border-t border-gray-300" />
              <ul className="flex-grow pb-8 space-y-2 md:space-y-4 md:pb-10 md:text-lg"></ul>
              {/* <a
                href="#"
                className="px-5 py-2 font-semibold text-gray-800 transition ease-in-out transform bg-white rounded-full shadow-md bg-opacity-70 hover:-translate-y-0.5 hover:bg-opacity-100 focus:outline-none"
              >
                Contact Sales{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mb-0.5 inline h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
