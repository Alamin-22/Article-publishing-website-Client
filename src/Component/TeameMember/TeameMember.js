import Member from "./Member.module.css";

const TeameMember = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <a className={Member.card1} id="shadow-xl" href="#">
        <figure className="flex justify-center  items-center mt-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-ynP26b5_1_N8swK_nVUJXyYgd0Xr9-ryg&usqp=CAU"
            alt="Shoes"
            className="rounded-full h-48"
          />
        </figure>
        <div>
          <h1 className="text-center mt-4 text-2xl">Stephanie</h1>
          <p className={Member.small}>
            Card description with lots of great facts and interesting details.
          </p>
          <div className={Member.go_corner} href="#">
            <div className={Member.go_arrow}>→</div>
          </div>
        </div>
      </a>
      <a className={Member.card1} href="#">
        <figure className="flex justify-center  items-center mt-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-ynP26b5_1_N8swK_nVUJXyYgd0Xr9-ryg&usqp=CAU"
            alt="Shoes"
            className="rounded-full h-48"
          />
        </figure>
        <div>
          <h1 className="text-center mt-4 text-2xl">Stephanie</h1>
          <p className={Member.small}>
            Card description with lots of great facts and interesting details.
          </p>
          <div className={Member.go_corner} href="#">
            <div className={Member.go_arrow}>→</div>
          </div>
        </div>
      </a>
      <a className={Member.card1} href="#">
        <figure className="flex justify-center  items-center mt-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-ynP26b5_1_N8swK_nVUJXyYgd0Xr9-ryg&usqp=CAU"
            alt="Shoes"
            className="rounded-full h-48"
          />
        </figure>
        <div>
          <h1 className="text-center mt-4 text-2xl">Stephanie</h1>
          <p className={Member.small}>
            Card description with lots of great facts and interesting details.
          </p>
          <div className={Member.go_corner} href="#">
            <div className={Member.go_arrow}>→</div>
          </div>
        </div>
      </a>
      <a className={Member.card1} href="#">
        <figure className="flex justify-center  items-center mt-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-ynP26b5_1_N8swK_nVUJXyYgd0Xr9-ryg&usqp=CAU"
            alt="Shoes"
            className="rounded-full h-48"
          />
        </figure>
        <div>
          <h1 className="text-center mt-4 text-2xl">Stephanie</h1>
          <p className={Member.small}>
            Card description with lots of great facts and interesting details.
          </p>
          <div className={Member.go_corner} href="#">
            <div className={Member.go_arrow}>→</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default TeameMember;
