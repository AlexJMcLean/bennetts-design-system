interface Props {
  icon: string;
}
function GoogleIcon({ icon }: Props) {
  return <span className="material-symbols-outlined">{icon}</span>;
}

export default GoogleIcon;
