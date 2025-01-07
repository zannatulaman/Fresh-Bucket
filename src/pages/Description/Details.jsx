
import { FaCheckCircle } from "react-icons/fa";

const Details = () => {
  return (
    <div className="details container mt-30">
      <div className="details-wrapper">
        <h4>Description</h4>
        <hr />
        <div className="grid grid-cols-2 grid-gap-30">
          <div className="left-grid">
            <p>
              Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
              posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
              vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet
              nisi porttitor vel. Etiam tincidunt metus vel dui interdum
              sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam
              mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla
              facilisi. Nam scelerisque vitae justo a convallis. Morbi urna
              ipsum, placerat quis commodo quis, egestas elementum leo. Donec
              convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla
              elit. Nulla mauris tellus, feugiat quis pharetra sed, gravida ac
              dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi
              viverra velit, pellentesque tristique neque mi eget nulla. Proin
              luctus elementum neque et pharetra.
            </p>
            <br />
            <p>
              Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui.
              Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra
              velit, pellentesque tristique neque mi eget nulla. Proin luctus
              elementum neque et pharetra.
            </p>
            <div>
              <p>
                <FaCheckCircle /> 100 g of fresh leaves provides.
              </p>
              <p>
                <FaCheckCircle />
                Aliquam ac est at augue volutpat elementum.
              </p>
              <p>
                <FaCheckCircle />
                Quisque nec enim eget sapien molestie.
              </p>
              <p>
                <FaCheckCircle />
                Proin convallis odio volutpat finibus posuere.
              </p>
            </div>
            <p>
              Cras et diam maximus, accumsan sapien et, sollicitudin velit.
              Nulla blandit eros non turpis lobortis iaculis at ut massa.{" "}
            </p>
          </div>
          <div className="right-grid">
            <img
              src="https://s3-alpha-sig.figma.com/img/f59f/1a36/606440519ea1c5c82e23b225b6ee0828?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lqTHux6cLmuORUJwNGVWY0lf82p5fSTW1siXMKpXZKnLhqIKcDzc3i-a4w~~o6TEhEIsy1tiRLhwfKIbvdGgSo8tK40oN12klfrVjXP2eMlPcXb7HkuU2ocbwVXeQPI2hGqj58r~3j1iUoAtu50L~gLbkb51K5RhqqrDprzXf~ljopdGshFig1HAyMONgnLzqriDq8fup~9TFbS8fLtOy94DTTntKt0jCME3T39cJJW~qTs7QXyryzpiwHmpEY8NLZHqFlwhRN8U1C-aco-5UOgoKI4vzSWPbdZZQ7W4idfR-FE2bupB0n-TqtA3iDktrqoqvN6H7sFvREaPRtiaQA__"
              alt="" height={"357px"} width={"637"}
            />
            <div className="right-grid-bottom">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details