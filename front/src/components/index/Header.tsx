interface Props {
  title: string;
  subtitle: string;
}

function Header(props: Props) {
  const { title, subtitle } = props;

  return <div id="header">
    <h2>
      { title }
    </h2>
    <small>
      { subtitle }
    </small>
  </div>
}

export default Header;