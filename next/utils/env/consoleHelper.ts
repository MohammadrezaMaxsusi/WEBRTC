import { isProduction } from "./environment";

if (isProduction) {
  console.log = () => null;
  console.warn = () => null;
  console.error = () => null;
  console.assert = () => null;
  console.debug = () => null;
  console.info = () => null;
  console.trace = () => null;
}
