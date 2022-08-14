export default function getHubPort() {
  return window.getCorePort ? window.getCorePort() : 9000;
}
