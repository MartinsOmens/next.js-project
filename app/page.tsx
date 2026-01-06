export default function Home() {
  return (
    <>
      <form className="flex items-center flex-col gap-4 mt-24 mx-auto w-[80%] max-w-150">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="py-2 px-3 border border-[#eee] w-full outline-none"
        />
        <textarea
          name="description"
          placeholder="Enter Description"
          className="w-full border border-[#eee] px-3 py-2 outline-none"
        ></textarea>
      </form>
    </>
  );
}
