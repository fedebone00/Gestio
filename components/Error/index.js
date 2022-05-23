const React = require("react");
const Image = require("next/image");


module.exports = function Error() {
  return (
    <div> 
        <Image
        layout="fill"
        className="object-center object-cover pointer-events-none"
        src="/../public/404.png"
        alt="title"
      />
    </div>
  )
}
