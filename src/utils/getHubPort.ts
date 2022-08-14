export default function getHubPort() {
  return window.getCorePort?.() || Number(process.env.HUB_PORT) || 9000;
}
