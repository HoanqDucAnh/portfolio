import CodeBlock from "@/components/common/codeblock";
import {
	sqlCode,
	Table1,
	Table2,
	Table3,
	Table4,
	Table5,
	Table6,
} from "../../../components/data/userstreak/userstreakdata";
import React from "react";
import SqlTable from "@/components/common/tabledata";
import { Link } from "react-scroll";
import Inforarticle from "@/components/common/inforarticle";

export default function UserStreakComponent() {
	return (
		<div className="grid grid-cols-5 mt-24">
			<div className="col-span-1  mt-10 hidden lg:block pl-9 self-start ">
				<div className="fixed">
					<h6 className="text-3xl">Table content</h6>
					<ul>
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
										Step 1: Remove duplicate login, filter date
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
										Step 2: Create an ID column
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
										Step 3: Create prev_date column
									</Link>
								</li>
								<li className="scrollspy-item">
									<Link
										to="step4"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scroll-active"
									>
										Step 4: Create Start_ID and Streak_ID
									</Link>
								</li>
								<ul className="ml-4">
									<li className="scrollspy-item">
										<Link
											to="step4.1"
											spy={true}
											smooth={true}
											offset={-80}
											duration={50}
											activeClass="scroll-active"
										>
											Step 4.1: Start_ID column
										</Link>
									</li>
									<li className="scrollspy-item">
										<Link
											to="step4.2"
											spy={true}
											smooth={true}
											offset={-80}
											duration={50}
											activeClass="scroll-active"
										>
											Step 4.2: Streak_ID column
										</Link>
									</li>
								</ul>
								<li className="scrollspy-item">
									<Link
										to="step5"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scroll-active "
										className="whitespace-pre-line"
									>
										Step 5: Find each player longest Streak{"\n"}and find top 3
										longest streak
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
										Step 6: Bring It All Together
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
					<h1 className="text-4xl text-[#f27d0d]">
						User Streaks (Classis Gaps and Islands)
					</h1>
					<p className="text-xs mt-1">
						By <strong>Mark Pham</strong>{" "}
						<span className="text-[#f27d0d]">|</span> May 20, 2023{" "}
						<span className="text-[#f27d0d]">|</span> Topic: Gaps and Islands
						Analysis, Case When Statements, ROW() NUMBER(), RANK(), CTE
					</p>
				</section>
				<div className="text-xs m-5 text-justify">
					<section id="prompt">
						<div className="mb-5">
							<span className="text-[#f27d0d]">Prompt: </span>Imagine you work
							for a video games company. Provide a table with user id and the
							dates they visited the platform, find the top 3 users with the
							longest continuous streak of visiting the platform as of August
							10, 2022. Output the user ID and the length of the streak. In case
							of a tie, display all users with the top three longest streaks.
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
								<ul style={{ listStyleType: "circle" }}>
									We are given a table called <code>user_streaks </code>with the
									following columns:
									<li style={{ marginLeft: "2rem" }} className="m-1">
										<code>user_id:</code> The unique identifier for each user.
									</li>
									<li style={{ marginLeft: "2rem" }} className="mb-1">
										<code>date_visited:</code> The date on which the user
										visited the platform.
									</li>
								</ul>
								<p>
									Now that we understand the data, let's define the problem
									statement.
								</p>
							</div>
						</section>
						<section id="prblState">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									The Problem Statement
								</p>
							</div>
							<div className="mb-5">
								<ol style={{ listStyleType: "decimal" }}>
									We need to find the top 3 users with the longest continuous
									streak of visiting the platform as of August 10, 2022. A
									streak is defined as consecutive visits on consecutive days.
									<br />
									<br />
									To solve this problem, we will
									<li style={{ marginLeft: "2rem" }} className="m-1">
										Identify the streaks of consecutive visits for each user.
									</li>
									<li style={{ marginLeft: "2rem" }} className="mb-1">
										Calculate the length of each streak.
									</li>
									<li style={{ marginLeft: "2rem" }} className="mb-1">
										Group the streaks.
									</li>
									<li style={{ marginLeft: "2rem" }} className="mb-1">
										Select the top 3 users with the longest streaks..
									</li>
								</ol>
								<p>
									With these conditions in mind, let's break down the code and
									explain each part.
								</p>
							</div>
						</section>
					</section>
					<section id="solution">
						<div className="mb-2">
							<p className="text-3xl mt-2 text-[#f27d0d]">Solution</p>
						</div>
						<p className="mb-2">Let's take a look at the tables again:</p>
						<div className="mb-2">
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
									Step 1: Remove duplicate login, filter date
								</p>
							</div>
							<div className="mb-2">
								<p className="mb-2">
									The first step is to remove duplicates from the dataset, sort
									the table by user_id and date_visited accordingly, and wrap a
									result into a CTE1. Also, filter out all the dates visited{" "}
									{"<="} '2022-08-10'. The goal is to feed the result of CTE1
									into CTE2
								</p>
								<div className="mb-2">
									<CodeBlock language="sql" code={sqlCode.code2} />
								</div>
								<SqlTable
									tableTitle={Table2.tableTitle}
									tableCol={Table2.tableCol}
									tableData={Table2.tableData}
								/>
							</div>
						</section>
						<section id="step2">
							<section id="step2-1">
								<div className="mb-2">
									<p className="text-xl mt-2 text-[#f27d0d]">
										Step 2: Create an ID column
									</p>
								</div>
								<div className="mb-2">
									<p>
										The second step is to create a column ID auto increment by
										using the ROW() OVER() function. We will need this ID later
										on to create future calculations
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
						</section>
						<section id="step3">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									Step 3: Create prev_date column
								</p>
							</div>
							<div className="mb-2">
								<p>
									The third step is to use the LAG(partition by order by)
									function to correspondingly find the previous login date for
									each user. We will call this column prev_date
								</p>
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
						</section>
						<section id="bring2Gether">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									Step 4: Create Start_ID and Streak_ID
								</p>
							</div>
							<div className="mb-2">
								<p>
									{" "}
									This is when things get a little bit more tricky. In this
									step, the goal is to generate the Start_ID column and the
									Streak_ID column
								</p>
							</div>
							<section id="step4.1">
								<div className="mb-2">
									<p className="text-xl mt-2 text-[#f27d0d]">
										Step 4.1: Start_ID column
									</p>
								</div>
								<div className="mb-2">
									<ul style={{ listStyleType: "circle" }}>
										We will create the Start_ID column by using the Case When
										function along with the DATEDIFF() function. The logic is as
										follows:
										<li style={{ marginLeft: "2rem" }} className="m-1">
											If the difference between date and prev then is not 1 (or
											the date is not continuous) or there's no prev_date,
											return 1, signal to create a new streak
										</li>
										<li style={{ marginLeft: "2rem" }} className="mb-1">
											If the difference between date and prev then is 1 (or the
											date is continuous), return 0, signal to continue the
											streak
										</li>
										<p>The Case When statement will be as follows:</p>
									</ul>
								</div>
								<div className="mb-2">
									<CodeBlock language="sql" code={sqlCode.code5} />
								</div>
							</section>
							<section id="step4.2">
								<div className="mb-2">
									<p className="text-xl mt-2 text-[#f27d0d]">
										Step 4.2: Streak_ID column
									</p>
								</div>
								<div className="mb-2">
									<p>
										The Streak_ID will be built based on the Start_ID column. We
										will use the aggregate function SUM() along side with the
										OVER() statement. We will take the sum of the Start_ID
										column to create a different streak for each user_id
									</p>
								</div>
								<div className="mb-2">
									<CodeBlock language="sql" code={sqlCode.code6} />
								</div>
								<p className="mb-2">
									In the end, the CTE4 will look something like this:
								</p>
								<div className="mb-2">
									<CodeBlock language="sql" code={sqlCode.code7} />
								</div>
								<SqlTable
									tableTitle={Table5.tableTitle}
									tableCol={Table5.tableCol}
									tableData={Table5.tableData}
								/>
							</section>
						</section>
						<section id="step5">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									Step 5: Find each player longest Streak and find top 3 longest
									streak
								</p>
							</div>
							<div className="mb-2">
								<p>
									Feel free to take time to think and understand step 4 as it’s
									the most difficult step in this challenge. From now on, it
									will get much easier. In this step, we will group and rank
									(desc) the streak of each player accordingly to find the
									longest streak.
									<br />
									<br />
									Lastly, the problem states that we will return the top 3
									players with the longest streak. In case of a tie, display all
									users with the top three longest streaks. Therefore, a simple
									order by and limit will work well.
								</p>
							</div>
							<div className="mb-2">
								<CodeBlock language="sql" code={sqlCode.code8} />
							</div>
						</section>
						<section id="res">
							<div className="mb-5">
								<p className="text-xl mt-2 text-[#f27d0d]">Result</p>
								<div className="mb-1">
									<p>Execution time: 0.01469 seconds</p>
								</div>
							</div>
							<SqlTable
								tableTitle={Table6.tableTitle}
								tableCol={Table6.tableCol}
								tableData={Table6.tableData}
							/>
						</section>
					</section>
					<section id="bringTogether">
						<div className="mb-2">
							<p className="text-2xl mt-2 text-[#f27d0d]">
								Step 6: Bring it all together
							</p>
						</div>
						<div className="mb-2">
							<CodeBlock language="sql" code={sqlCode.code9} />
						</div>
					</section>
					<section id="conclusion">
						<div className="mb-2">
							<p className="text-3xl mt-2 text-[#f27d0d]">Conclusion:</p>
						</div>
						<div className="mb-5">
							<ul style={{ listStyleType: "circle" }}>
								Regarding this problem, the key takeaways are as follows:
								<li style={{ marginLeft: "2rem" }} className="m-1">
									Understand Window function: LEAD(), LAG(), Dense_rank vs
									RANK()
								</li>
								<li style={{ marginLeft: "2rem" }} className="mb-1">
									Understand CTE and subqueries
								</li>
								<li style={{ marginLeft: "2rem" }} className="mb-1">
									Date manipulation function DATEDIFF()
								</li>
								<li style={{ marginLeft: "2rem" }} className="mb-1">
									Aggregate function along with window function
								</li>
								<li style={{ marginLeft: "2rem" }} className="mb-1">
									Use of Case When Statement
								</li>
							</ul>
						</div>
					</section>
					<section id="sqlTableScript">
						<div className="mb-2">
							<p className="text-3xl mt-2 text-[#f27d0d]">SQL Tables Scripts</p>
						</div>
						<div className="mb-2">
							<CodeBlock language="sql" code={sqlCode.code10} />
						</div>
					</section>
				</div>
			</div>
			<div className="col-span-1">
				<div className="fixed">
					<Inforarticle />
				</div>
			</div>
		</div>
	);
}
