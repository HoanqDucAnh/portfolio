import CodeBlock from "@/components/common/codeblock";
import {
	sqlCode,
	Table1,
	Table2,
	Table3,
	Table4,
	Table5,
	Table6,
} from "../../../components/data/timebetween/timebetweendata";
import React from "react";
import SqlTable from "@/components/common/tabledata";
import { Link } from "react-scroll";

export default function TimeBetweenComponent() {
	return (
		<div className="grid grid-cols-5 mt-24 ">
			<div className="col-span-1 mt-10 hidden lg:flex pl-9 self-start scrollspy-sticky">
				<div className="">
					<h6 className="text-3xl">Table content</h6>
					<ul>
						<li className="scrollspy-item">
							<Link
								to="title"
								spy={true}
								smooth={true}
								offset={-80}
								duration={50}
								activeClass="scroll-active "
							>
								Time Between
							</Link>
						</li>
						<li className="scrollspy-item">
							<Link
								to="prompt"
								spy={true}
								smooth={true}
								offset={-80}
								duration={50}
								activeClass="scroll-active "
							>
								Prompt
							</Link>
						</li>
						<li>
							<Link
								to="tbls&data"
								spy={true}
								smooth={true}
								offset={-80}
								duration={50}
								activeClass="scroll-active "
								className="scrollspy-item"
							>
								Tables and Data
							</Link>
							<ul className="ml-4">
								<li className="scrollspy-item">
									<Link
										to="undData"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scroll-active "
									>
										Understand the data
									</Link>
								</li>
								<li className="scrollspy-item">
									<Link
										to="prblState"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scroll-active "
									>
										Problem Statement
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link
								to="solution"
								spy={true}
								smooth={true}
								offset={-80}
								duration={50}
								activeClass="scroll-active "
								className="scrollspy-item"
							>
								Solution
							</Link>
							<ul className="ml-4">
								<li className="scrollspy-item">
									<Link
										to="step1"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scroll-active "
									>
										Step 1: Find the first page load for each user
									</Link>
								</li>
								<li className="scrollspy-item">
									<Link
										to="step2"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scroll-active "
									>
										Step 2: Use Lead to find the next_timestamp and next_action
									</Link>
								</li>
								<li className="scrollspy-item">
									<Link
										to="step3"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scroll-active "
									>
										Step 3: Calculate the time_diff and rank the time_diff
										accordingl
									</Link>
								</li>
								<li className="scrollspy-item">
									<Link
										to="bringTogether"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scroll-active "
									>
										Step 4: Bring It All Together
									</Link>
								</li>
							</ul>
							<li className="scrollspy-item">
								<Link
									to="conclusion"
									spy={true}
									smooth={true}
									offset={-80}
									duration={50}
									activeClass="scroll-active "
								>
									Conclusions
								</Link>
							</li>
							<li className="scrollspy-item">
								<Link
									to="sqlTableScript"
									spy={true}
									smooth={true}
									offset={-80}
									duration={50}
									activeClass="scroll-active "
								>
									SQL Tables Scripts
								</Link>
							</li>
						</li>
					</ul>
				</div>
			</div>
			<div className="lg:col-span-3 md:col-span-5 section-container min-h-screen mb-24 text-center">
				<section id="title">
					<h1 className="text-4xl text-[#f27d0d]">Time Between two events</h1>
					<p className="text-xs mt-1">
						By <strong>Mark Pham</strong>{" "}
						<span className="text-[#f27d0d]">|</span> May 20, 2023{" "}
						<span className="text-[#f27d0d]">|</span> Topic: CTE, TIME_FORMAT(),
						SEC_TO_TIME(), TIMESTAMPDIFF()
					</p>
				</section>
				<div className="text-xs m-5 text-justify">
					<section id="prompt">
						<div className="mb-5">
							<p>
								<span className="text-[#f27d0d]">Prompt: </span>In this problem,
								we are given Facebook's web logs which capture every user action
								from page loading to page scrolling. Our task is to find the
								user with the least amount of time between a page load and their
								first scroll down. The output should include the user id, page
								load time, first scroll-down time, and the time between the two
								events in seconds.
							</p>
							<br />
							<p>
								To solve this problem, we will use a SQL query that utilizes
								common table expressions (CTE) to break down the data into three
								intermediate tables: page_loads, scroll_downs, and
								user_time_diff. We will then select the user with the minimum
								time difference from the user_time_diff table.
							</p>
							<br />
							<p>Let's break down the steps involved in the solution.</p>
						</div>
					</section>
					<section id="tbls&data">
						<section id="undData">
							<div className="mb-2">
								<h2 className="text-3xl text-[#f27d0d]">Tables and Data</h2>
								<p className="text-xl mt-2 text-[#f27d0d]">
									Understanding the data
								</p>
							</div>
							<div className="mb-5">
								<p>
									The data consists of Facebook weblogs, which capture user
									actions such as page loading and scrolling. The data is stored
									in a table called facebook_web_log with columns user_id,
									timestamp, and action.
								</p>
							</div>
						</section>
						<section id="prblState">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									The Problem Statement
								</p>
							</div>
							<div className="mb-2">
								<p>
									We need to find the user with the least amount of time between
									a page load and their first scroll down. This requires finding
									the earliest page load and scroll-down timestamps for each
									user, calculating the time difference between the two events,
									and selecting the user with the minimum time difference.
								</p>
							</div>
						</section>
					</section>
					<section id="solution">
						<div className="mb-2">
							<p className="text-3xl mt-2 text-[#f27d0d]">Solution</p>
						</div>
						<p className="mb-2">Let's take a look at the tables again:</p>
						<div className="mb-5">
							<CodeBlock language="sql" code={sqlCode.code1} />
						</div>
						<div className="mb-5">
							<SqlTable
								tableTitle={Table1.tableTitle}
								tableCol={Table1.tableCol}
								tableData={Table1.tableData}
							/>
						</div>
						<section id="step1">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									Step 1: Find the first page load for each user
								</p>
							</div>
							<div className="mb-2">
								<p className="mb-2">
									The first step is to filter only the “page_load” and
									“scroll_down” actions before fitting the result queries into a
									CTE. We will order the result by user id and action. The query
									to achieve this is as follows:
								</p>

								<div className="mb-2">
									<CodeBlock language="sql" code={sqlCode.code2} />
								</div>
								<div className="mb-2">
									<SqlTable
										tableTitle={Table2.tableTitle}
										tableCol={Table2.tableCol}
										tableData={Table2.tableData}
									/>
								</div>
							</div>
						</section>
						<section id="step2">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									Step 2: Use Lead to find the next_timestamp and next_action
								</p>
							</div>
							<div className="mb-2">
								<p>
									In this step, we will find the next_timestamp and next action
									by using the LEAD() window function. In SQL, the LEAD function
									is a window function that is used to access the value of a
									column from the next row within the result set, based on the
									order specified in the PARTITION BY/ ORDER BY clause. In this
									case, we will order by the timestamp and partition by the
									user_id
								</p>
							</div>
							<div className="mb-2">
								<CodeBlock language="sql" code={sqlCode.code3} />
							</div>
							<div className="mb-2">
								<SqlTable
									tableTitle={Table3.tableTitle}
									tableCol={Table3.tableCol}
									tableData={Table3.tableData}
								/>
							</div>
						</section>
						<section id="step3">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									Step 3: Calculate the time_diff and rank the time_diff
									accordingly
								</p>
							</div>
							<div className="mb-2">
								<ul style={{ listStyleType: "circle" }}>
									Calculate the time_diff and rank the time_diff accordingly
									<li style={{ marginLeft: "2rem" }} className="m-1">
										TIMESTAMPDIFF() Function: TIMESTAMPDIFF() is a date and time
										function used in SQL to calculate the difference between two
										timestamps in various units (e.g., seconds, minutes, hours,
										days).
										<ul style={{ listStyleType: "circle" }}>
											<li style={{ marginLeft: "2rem" }} className="m-1">
												It takes three arguments: the unit of time (e.g.,
												'SECOND', 'MINUTE', 'HOUR', 'DAY'), the start timestamp,
												and the end timestamp.
											</li>
										</ul>
									</li>
									<li style={{ marginLeft: "2rem" }} className="m-1">
										RANK() is a window function commonly used in SQL to assign a
										rank to each row within a result set based on the values in
										one or more columns.
										<ul style={{ listStyleType: "circle" }}>
											<li style={{ marginLeft: "2rem" }} className="m-1">
												It is often used in conjunction with the PARTITION BY/
												ORDER BY clause to determine the ranking order. For
												example, you can use RANK() to rank employees by their
												salary in ascending or descending order.
											</li>
										</ul>
									</li>
								</ul>
							</div>
							<div className="mb-2">
								<CodeBlock language="sql" code={sqlCode.code4} />
							</div>
							<div className="mb-2">
								<SqlTable
									tableTitle={Table4.tableTitle}
									tableCol={Table4.tableCol}
									tableData={Table4.tableData}
								/>
							</div>
							<div className="mb-2">
								<p>Now we will use a subquery to filter out ranking = 1</p>
							</div>
							<div className="mb-2">
								<CodeBlock language="sql" code={sqlCode.code5}></CodeBlock>
							</div>
							<div className="mb-2">
								<SqlTable
									tableTitle={Table5.tableTitle}
									tableCol={Table5.tableCol}
									tableData={Table5.tableData}
								/>
							</div>
							<div className="mb-2">
								<ul style={{ listStyle: "circle" }}>
									Perfect, that looks good to me. However, our boss came in and
									demanded to reformat the time_diff column from “9” to
									“00:00:09”. No problem, we just need to change the formatting
									in the outer query using TIME_FORMAT() and SEC_TO_TIME()
									<li style={{ marginLeft: "2rem" }} className="m-1">
										SEC_TO_TIME(time_diff): This function takes a numerical
										value time_diff (presumably representing a time duration in
										seconds) and converts it into a time value. In other words,
										it converts the number of seconds into a time format, which
										includes hours, minutes, and seconds. For example, if
										time_diff is 3600 seconds, this function will convert it to
										'01:00:00', indicating 1 hour, 0 minutes, and 0 seconds
									</li>
									<li style={{ marginLeft: "2rem" }} className="m-1">
										TIME_FORMAT(..., '%H:%i:%s'): This function is used to
										format the time value generated in the previous step
										(SEC_TO_TIME(time_diff)) into a specific time format. The
										format string '%H:%i:%s' specifies how the time should be
										displayed:
										<ul style={{ listStyle: "circle" }}>
											<li style={{ marginLeft: "2rem" }} className="m-1">
												%H: Represents hours in two-digit format (e.g., '01',
												'02', '12', '23').
											</li>
											<li style={{ marginLeft: "2rem" }} className="m-1">
												%i: Represents minutes in two-digit format (e.g., '00',
												'01', '59').
											</li>
											<li style={{ marginLeft: "2rem" }} className="m-1">
												%s: Represents seconds in two-digit format (e.g., '00',
												'01', '59').
											</li>
										</ul>
									</li>
								</ul>
							</div>
							<div className="mb-2">
								<CodeBlock language="sql" code={sqlCode.code5}></CodeBlock>
							</div>
							<div className="mb-2">
								<SqlTable
									tableTitle={Table6.tableTitle}
									tableCol={Table6.tableCol}
									tableData={Table6.tableData}
								/>
							</div>
						</section>
						<section id="bring2Gether">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									Step 4: Bring it all together
								</p>
							</div>
							<div className="mb-2">
								<CodeBlock language="sql" code={sqlCode.code6}></CodeBlock>
							</div>
							<div className="mb-2">
								<p>The result is as follows:</p>
							</div>
							<div className="mb-2">
								<SqlTable
									tableTitle={Table6.tableTitle}
									tableCol={Table6.tableCol}
									tableData={Table6.tableData}
								/>
							</div>
						</section>
					</section>
					<section id="conclusion">
						<div className="mb-2">
							<p className="text-3xl mt-2 text-[#f27d0d]">Conclusions</p>
						</div>
						<div className="mb-2">
							<ul style={{ listStyle: "circle" }}>
								Regarding this problem, the key takeaways are as follows:
								<li style={{ marginLeft: "2rem" }} className="m-1">
									Understand CTE and subqueries
								</li>
								<li style={{ marginLeft: "2rem" }} className="m-1">
									Date manipulation function TIMESTAMPS DIFF(), TIME_FORMAT(),
									SEC_TO_TIME()
								</li>
								<li style={{ marginLeft: "2rem" }} className="m-1">
									LEAD(), LAG(), RANK() window function
								</li>
							</ul>
						</div>
					</section>
					<section id="sqlTableScript">
						<div className="mb-2">
							<p className="text-3xl mt-2 text-[#f27d0d]">SQL Tables Scripts</p>
						</div>
						<div className="mb-2">
							<CodeBlock language="sql" code={sqlCode.code7}></CodeBlock>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
