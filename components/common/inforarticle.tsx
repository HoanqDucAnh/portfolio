import React from "react";

export default function inforarticle() {
	return (
		<div className="">
			<h6>Follow me!</h6>
			<section id="social">
				<div>
					<a href="https://www.linkedin.com/in/minhbphamm/" target="_blank">
						<i className="bi bi-linkedin"> LinkedIn</i>
					</a>
				</div>
				<div>
					<a href="https://github.com/MarkPhamm" target="_blank">
						<i className="bi bi-github"> Github</i>
					</a>
				</div>
			</section>
			<hr></hr>
			<section>
				<h6>Read more</h6>
				{/* <Tooltip text="First Day Retention Rate">
        <a href="userstreak">User Streak</a>
      </Tooltip>
      <Tooltip text="First Day Retention Rate">
        <a href="retention">First Day Retention Rate</a>
      </Tooltip>
      <Tooltip text="Time between two events">
        <a href="timebetween">Time between two events</a>
      </Tooltip> */}
			</section>
		</div>
	);
}
