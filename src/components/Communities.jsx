import CommunityCard from "./CommunityCard";

const Communities = () => {
  let communitiesList = [
    {
      title: "React India 2023",
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
      consequatur amet explicabo officia officiis quas? Quae cumque, commodi
      perferendis animi eius deleniti, ullam totam sint nisi debitis
      provident consequatur nemo, fuga dolorem.`,
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1703189981/F8DH4C5aIAAkaEu_xxqofo.jpg",
    },
    {
      title: "Hack The League 2.0",
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
      consequatur amet explicabo officia officiis quas? Quae cumque, commodi
      perferendis animi eius deleniti, ullam totam sint nisi debitis
      provident consequatur nemo, fuga dolorem.`,
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1703228702/340678137_931656447884530_6400185077649387270_n_k0osl5.jpg",
    },
    {
      title: "KCD MUMBAI 2023",
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
      consequatur amet explicabo officia officiis quas? Quae cumque, commodi
      perferendis animi eius deleniti, ullam totam sint nisi debitis
      provident consequatur nemo, fuga dolorem.`,
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1703228616/355213604_787587226403100_7263326915584750560_n_kiuwak.jpg",
    },
    {
      title: "PUNE FOSS 2023",
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
      consequatur amet explicabo officia officiis quas? Quae cumque, commodi
      perferendis animi eius deleniti, ullam totam sint nisi debitis
      provident consequatur nemo, fuga dolorem.`,
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1703228790/339274515_611481033840669_1594108768360683823_n_ndagkj.jpg",
    },
    {
      title: "MUG PUNE 2023",
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
      consequatur amet explicabo officia officiis quas? Quae cumque, commodi
      perferendis animi eius deleniti, ullam totam sint nisi debitis
      provident consequatur nemo, fuga dolorem.`,
      url: "https://res.cloudinary.com/dw58xmffd/image/upload/v1703229096/386476778_850792050386259_3706650073783872632_n_twq8oy.jpg",
    },
  ];

  return (
    <div
      className="h-fit w-full my-24 flex flex-col gap-8 py-12"
      id="community"
    >
      <span className="text-center text-2xl italic ">
        "Collaboration First ! Code Second !" - Shoutout to{" "}
        <a href="https://www.eddiehub.org/" className="italic font-bold">
          EddieHub
        </a>
      </span>
      <span className="text-center text-8xl font-bold ">
        Community Contributions
      </span>
      <div className="flex flex-row flex-wrap gap-16 mt-12 justify-center ">
        {communitiesList.map((community) => {
          return <CommunityCard key={community.title} data={community} />;
        })}
      </div>
      {/* <div className="mx-auto mt-24">
        <button className="p-4 px-12 rounded-2xl text-xl font-bold border border-blue-300 flex flex-row place-items-center gap-4 hover:bg-blue-500 hover:text-white ">
          Check More
        </button>
      </div> */}
    </div>
  );
};

export default Communities;
