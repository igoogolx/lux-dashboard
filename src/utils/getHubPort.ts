const getCorePort = () => {
  const params = new URL(window.location.href).searchParams;
  return parseInt(params.get("port") as string, 10);
};

export default function getHubPort() {
  const isDev = process.env.NODE_ENV === "development";
  return (isDev ? Number(process.env.HUB_PORT) : getCorePort()) || 9000;
}
