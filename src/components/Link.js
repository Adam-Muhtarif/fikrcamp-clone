export default function Link(props) {
  return (
    <li className="cursor-pointer hover:text-primary text-[14px]">
      {props.link}
    </li>
  );
}
