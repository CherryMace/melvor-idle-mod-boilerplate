/**
 * @param {{ name: string }} param0 
 */
export default function Greeter({ name }) {
  return {
    $template: '#modBoilerplace__greeter',
    name
  };
}