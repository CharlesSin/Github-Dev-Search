// import GithubIcon from "@/components/icons/GithubIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import LinkIcon from "@/components/icons/LinkIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import BuldingIcon from "@/components/icons/BuldingIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import { User } from "@/interfaces/user";
import Image from "next/image";

interface Props {
  user: User;
}

function valideURL(url: string) {
  // Verificar si la URL comienza con "http://" o "https://"
  if (!/^https?:\/\//i.test(url)) {
    // Agregar "https://" al principio de la URL
    url = "https://" + url;
  }
  return url;
}

const UserCardInfo = ({ user }: Props) => {
  console.log({ user });
  return (
    <article className="grid-areas rounded-xl bg-light-primary p-4 shadow-2xl dark:bg-dark-primary dark:text-white dark:shadow-none">
      <div className="section-logo mr-3 grid h-24 w-24 place-content-center overflow-hidden rounded-full bg-light-bg p-1 shadow-2xl dark:bg-dark-bg dark:shadow-none lg:mx-auto">
        <Image src={user.avatar_url} width={100} height={100} alt={`profile img user ${user.name}`} className="rounded-full" />
        <GithubIcon className="relative top-2 h-full w-full" />
      </div>
      <div className="section-title">
        <h2 className="text-3xl font-bold">{user.name}</h2>
        <p>@{user.login}</p>
      </div>
      <p className="section-date lg:text-right">
        {new Date(user.created_at || "").toLocaleDateString("tw", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className="section-description mt-8 leading-loose">{user.bio || ""}</p>
      <div className="section-number bg-blue-50 text-blue-950 dark:bg-blue-950 mt-4 flex justify-around rounded-xl p-8 text-center dark:text-white">
        <article>
          <p>Repos</p>
          <p className="text-xl font-bold">{user.public_repos}</p>
        </article>
        <article>
          <p>Followers</p>
          <p className="text-xl font-bold">{user.followers}</p>
        </article>
        <article>
          <p>Following</p>
          <p className="text-xl font-bold">{user.following}</p>
        </article>
      </div>
      <div className="section-social mt-4 space-y-4 md:grid md:grid-cols-2">
        <article className="flex space-x-1">
          <i>
            <LocationIcon className="h-full w-full fill-blue dark:fill-white" width={"1rem"} />
          </i>
          <span>{user.location}</span>
        </article>
        <article className="flex space-x-4">
          <i>
            <LinkIcon className="h-full w-full fill-blue dark:fill-white" width={"1rem"} />
          </i>
          <a href={valideURL(user?.blog)} className="truncate">
            {user?.blog || "not information"}
          </a>
        </article>
        <article className="flex space-x-4">
          <i>
            <TwitterIcon className="h-full w-full fill-blue dark:fill-white" width={"1rem"} />
          </i>
          <a href={`https://www.twitter.com/${user?.twitter_username}`}>{user?.twitter_username || "not details"}</a>
        </article>
        <article className="flex space-x-4">
          <i>
            <BuldingIcon className="h-full w-full fill-blue dark:fill-white" width={"1rem"} />
          </i>
          <span>{user?.company || "not info"} </span>
        </article>
      </div>
    </article>
  );
};
export default UserCardInfo;
