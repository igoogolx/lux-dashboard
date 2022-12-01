import axios from "axios";
import { getVersion } from "@/electronContext";

function compareVersion(current: string, latest: string): boolean {
  return Number(latest) > Number(current);
}

function getVersionFromTag(tag: string) {
  return tag.slice(1);
}

export default async function checkForUpdate(): Promise<boolean> {
  const currenVersion = getVersion();
  if (!currenVersion) {
    return false;
  }
  const res = await axios.get(
    `https://api.github.com/repos/igoogolx/lux/releases/latest`
  );
  const latestVersion = getVersionFromTag(res.data.tag_name as string);
  return compareVersion(currenVersion, latestVersion);
}
