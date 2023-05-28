import SearchIcon from "@/components/icons/SearchIcon";

interface Props {
  getUser: (username: string) => Promise<void>;
}

const FormSearchUser = ({ getUser }: Props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    if (!username) return;
    await getUser(username);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-wrap items-center gap-2 rounded-xl bg-light-primary p-4 shadow-2xl dark:bg-dark-primary dark:shadow-none">
      <span className="min-w-[20px]">
        <SearchIcon className="fill-blue dark:fill-white" />
      </span>
      <input
        name="username"
        type="text"
        placeholder="Search Github username..."
        className="h-14 flex-1 rounded-lg bg-light-primary p-4 placeholder:text-blue focus:outline-none dark:bg-dark-primary dark:text-white dark:placeholder:text-white"
      />
      <button className="rounded-lg bg-light-btn-bg px-4 py-4 font-bold text-light-btn-text dark:bg-dark-btn-bg dark:text-dark-btn-text">Search</button>
    </form>
  );
};

export default FormSearchUser;
