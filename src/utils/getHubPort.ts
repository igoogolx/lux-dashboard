export default function getHubPort() {
  const isDev = process.env.NODE_ENV === "development";
  return (
    (isDev ? Number(process.env.HUB_PORT) : window.getCorePort?.()) || 9000
  );
}
