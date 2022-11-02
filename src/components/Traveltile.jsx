export default function Traveltile(props) {
  return (
    <div className="travel--tile">
      <img className="traveltile--image" src={props.place.imageUrl} alt="" />
      <div className="traveltile--details">
        <p className="traveltile--location">{props.place.location}</p>
        <h3 className="traveltile--title">{props.place.title}</h3>

        <p className="traveltile--dates">
          {props.place.startDate} - {props.place.endDate}
        </p>
        <p className="traveltile--description">{props.place.description}</p>
      </div>
    </div>
  );
}
