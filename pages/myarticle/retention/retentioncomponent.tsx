import CodeBlock from "@/components/common/codeblock";
import {
	sqlCode,
	Table1,
	Table2,
	Table3_1,
	Table3_2,
	Table4,
	Table5,
	Table6,
	Table7,
} from "../../../components/data/retention/retentiondata";
import React from "react";
import SqlTable from "@/components/common/tabledata";
import { Link } from "react-scroll";

export default function RetentionComponent() {
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
								First Day Retention Rate
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
										Step 1: Ranking
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
										Step 2: Self join with cte
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
										Step 3: Calculation with ROUND(), COUNT() and CONCAT()
									</Link>
								</li>
								<li className="scrollspy-item">
									<Link
										to="end2end1"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scroll-active"
									>
										Step 4: Bring it all together
									</Link>
								</li>
								<li className="scrollspy-item">
									<Link
										to="res"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scroll-active "
									>
										Result
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link
								to="optimi"
								spy={true}
								smooth={true}
								offset={-80}
								duration={50}
								activeClass="scroll-active "
								className="scrollspy-item"
							>
								Query optimization Solutions
							</Link>
							<ul className="ml-4">
								<li className="scrollspy-item">
									<Link
										to="step1Opti"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scroll-active "
									>
										Step 1: Create <code>second_login_date</code> using LEAD()
									</Link>
								</li>
								<li className="scrollspy-item">
									<Link
										to="step2Opti"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scroll-active "
									>
										Step 2: Count returning user using CASE WHEN + COUNT()
									</Link>
								</li>
								<li className="scrollspy-item">
									<Link
										to="end2end2"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scroll-active "
									>
										Step 3: Bring it all together (Optimization code)
									</Link>
								</li>
								<li className="scrollspy-item">
									<Link
										to="res2"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scroll-active "
									>
										Result
									</Link>
								</li>
							</ul>
						</li>
						<li className="scrollspy-item">
							<Link
								to="conclusion"
								spy={true}
								smooth={true}
								offset={-80}
								duration={50}
								activeClass="scroll-active "
							>
								Conclusion
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
					</ul>
				</div>
			</div>
			<div className="lg:col-span-3 md:col-span-5 section-container min-h-screen mb-24 text-center">
				<section id="title">
					<h1 className="text-4xl text-[#f27d0d]">First Day Retention Rate</h1>
					<p className="text-xs mt-1">
						By <strong>Mark Pham</strong>{" "}
						<span className="text-[#f27d0d]">|</span> May 20, 2023{" "}
						<span className="text-[#f27d0d]">|</span> Topic: DENSE_RANK vs RANK,
						CTE, Subquery, Window function, Self-join, Date manipulation,
						Aggregate function
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
									Before we begin, let's take a moment to understand the data we
									are working with. We have a table called{" "}
									<code>players_logins</code> which contains the login
									information of the players. This table has the following
									columns:
									<li style={{ marginLeft: "2rem" }} className="m-1">
										<code>user_id:</code> The unique identifier for each user.
									</li>
									<li style={{ marginLeft: "2rem" }} className="mb-1">
										<code>login_date:</code> The date when the player logged in
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
							<div className="mb-2">
								<p>
									Now that we know about the data, let's understand the problem
									statement. We need to calculate the first-day retention rate
									of the players. This rate is calculated by dividing the number
									of players who logged in 1 day after their first-ever log-in
									by the total number of players.
								</p>
							</div>
							<div className="mb-5">
								<SqlTable
									tableTitle={Table1.tableTitle}
									tableCol={Table1.tableCol}
									tableData={Table1.tableData}
								/>
							</div>
						</section>
					</section>
					<section id="solution">
						<div className="mb-2">
							<p className="text-3xl mt-2 text-[#f27d0d]">Solution</p>
						</div>
						<p className="mb-2">Let's take a look at the tables again:</p>
						<div className="mb-2">
							<CodeBlock language="sql" code={sqlCode.code0} />
						</div>
						<div className="mb-5">
							<SqlTable
								tableTitle={Table2.tableTitle}
								tableCol={Table2.tableCol}
								tableData={Table2.tableData}
							/>
						</div>
						<section id="step1">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									Step 1: Ranking (DENSE_RANK() vs RANK())
								</p>
							</div>
							<div className="mb-2">
								<p className="mb-2">
									The first step is to determine the 1st login days and the 2nd
									login days by each of the player_id, therefore, the idea is to
									use a RANK() OVER (Order by/Partition by) function to rank the
									login_date for each player_id accordingly. From there, query
									out the 1st and 2nd login date by the 'Ranking'
								</p>
								<p className="mb-2">
									<strong>Edge cases:</strong> there will be a chance that the
									player login multiple times in the first days, therefore we
									will need to use a DENSE_RANK() function instead of RANK(). If
									not, some players will mistakenly not have a 2nd day.{" "}
								</p>
								<div className="mb-2">
									<CodeBlock language="sql" code={sqlCode.code1} />
								</div>
								<div className="grid grid-cols-2 mb-2">
									<div className="col-span-1">
										<SqlTable
											tableTitle={Table3_1.tableTitle}
											tableCol={Table3_1.tableCol}
											tableData={Table3_1.tableData}
										/>
									</div>
									<div className="col-span-1">
										<SqlTable
											tableTitle={Table3_2.tableTitle}
											tableCol={Table3_2.tableCol}
											tableData={Table3_2.tableData}
										/>
									</div>
								</div>
								<div className="mb-2">
									<p>
										Now, let's move the previous block of code into a common
										table expression, called cte:
									</p>
								</div>
								<div className="mb-2">
									<CodeBlock language="sql" code={sqlCode.code2} />
								</div>
							</div>
						</section>
						<section id="step2">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									Step 2: Self join with cte
								</p>
							</div>
							<div className="mb-2">
								<p>
									Okay now, we can perform a self-join on cte in order to match
									the 1st login day with the second login day.
								</p>
							</div>
							<div className="mb-2">
								<p>
									<i>Edge case:</i> Be careful when considering a join. Some
									player_id might not have a second login date (meaning that
									they only log in once and never log in again)
								</p>
							</div>
							<div className="mb-2">
								<CodeBlock language="sql" code={sqlCode.code3} />
							</div>
							<div className="mb-2">
								<p>
									<code>a.ranking = b.ranking - 1</code> to match the 1st date
									with the 2nd login date{"  "}
									<br />
									<code>
										<i>DATEDIFF</i>(b.login_date, a.login_date) = 1
									</code>{" "}
									ensures that the player logs in 1 day after their first-ever
									log-in.
								</p>
							</div>
							<div className="mb-2">
								<SqlTable
									tableTitle={Table4.tableTitle}
									tableCol={Table4.tableCol}
									tableData={Table4.tableData}
								/>
							</div>
							<div className="mb-2">
								<p>
									The result is incredible! Now we just need to count the number
									of players that have the 'second login' column as non-null
									before dividing by the total number of players. In this case,
									the result should be 3/6 = 50%
								</p>
							</div>
							<div className="mb-2">
								<SqlTable
									tableTitle={Table5.tableTitle}
									tableCol={Table5.tableCol}
									tableData={Table5.tableData}
								/>
							</div>
						</section>
						<section id="step3">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									Step 3: Calculation with ROUND(), COUNT() and CONCAT()
								</p>
							</div>
							<div className="mb-2">
								<p>
									Now, calculate the metrics using a subquery, add rounding and
									% formatting with <code>CONCAT() </code>and{" "}
									<code>ROUND()</code>
								</p>
							</div>
							<div className="mb-2">
								<CodeBlock language="sql" code={sqlCode.code4} />
							</div>
						</section>
						<section id="bring2Gether">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									Step 4: Bring it all together
								</p>
							</div>
							<div className="mb-2">
								<CodeBlock language="sql" code={sqlCode.code5}></CodeBlock>
							</div>
						</section>

						<section id="res">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">Result</p>
								<p>Execution time: 0.02456 seconds</p>
								<p>First day retention rate: 50.00%</p>
								<p>
									The result is as expected 50%. Hooray, but is this the most
									optimized solution? Let's think about this again.
								</p>
							</div>
						</section>
					</section>
					<section id="optimi">
						<div className="mb-2">
							<p className="text-2xl mt-2 text-[#f27d0d]">
								Query optimization Solutions
							</p>
						</div>
						<div className="mb-2">
							<p>
								Since we use a self-join in step 2, our query may be running at
								the speed of O(N2). The DBSM has to scan the CTE twice to
								execute the join.
							</p>
							<p>
								If we can eliminate this join and still achieve the expected
								result, it's possible that we can make our query run at o(N)
								since the DBSM only has to scan the CTE once. A possible
								solution is to use <code>LEAD()</code> (Partition by/Order by)
							</p>
						</div>
						<section id="step1Opti">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									Step 1: Create <code>second_login_date</code> using{" "}
									<code>LEAD()</code>
								</p>
							</div>
							<div className="mb-2">
								<CodeBlock language="sql" code={sqlCode.code6} />
							</div>
							<div className="mb-2">
								<SqlTable
									tableTitle={Table6.tableTitle}
									tableCol={Table6.tableCol}
									tableData={Table6.tableData}
								/>
							</div>
							<div className="mb-2">
								<p>
									Now put the query above to a subquery and filter out the
									result where ranking = 1
								</p>
							</div>
							<div className="mb-2">
								<CodeBlock language="sql" code={sqlCode.code7} />
							</div>
							<div className="mb-2">
								<SqlTable
									tableTitle={Table7.tableTitle}
									tableCol={Table7.tableCol}
									tableData={Table7.tableData}
								/>
							</div>
						</section>
						<section id="step2Opti">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									Step 2: Count returning user using CASE WHEN + COUNT()
								</p>
							</div>
							<div className="mb-2">
								<ul style={{ listStyleType: "circle" }}>
									Now it's the difficult part, we will use a COUNT() + Case When
									function to count only the player_id when the different of the
									first_login_date and second_login_date = 1. The logic is as
									follow:
									<li style={{ marginLeft: "2rem" }} className="m-1">
										If True, Return player_id
									</li>
									<li style={{ marginLeft: "2rem" }} className="m-1">
										If False, Return Null
									</li>
								</ul>
							</div>
							<div className="mb-2">
								<CodeBlock language="sql" code={sqlCode.code8} />
							</div>
							<div className="mb-2">
								<p>
									The result is as expected 3 out of 6 players log in
									consecutively on the first and second days. Now add a little
									bit of formatting and calculation, and we will get the final
									result.
								</p>
							</div>
						</section>
						<section id="end2end2">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									Step 3: Bring it all together (Optimization code)
								</p>
							</div>
							<div className="mb-2">
								<CodeBlock language="sql" code={sqlCode.code9} />
							</div>
						</section>
						<section id="res2">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">Result</p>
								<p>Execution time: 0.01352 seconds</p>
								<p>First day retention rate: 50.00%</p>
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
										Understand Window function: LEAD(), LAG(), DENSE_RANK vs
										RANK()
									</li>
									<li style={{ marginLeft: "2rem" }} className="mb-1">
										Understand self-join, left join vs. inner join
									</li>
									<li style={{ marginLeft: "2rem" }} className="mb-1">
										Understand CTE and subqueries
									</li>
									<li style={{ marginLeft: "2rem" }} className="mb-1">
										Date manipulation function
									</li>
									<li style={{ marginLeft: "2rem" }} className="mb-1">
										Aggregate function
									</li>
								</ul>
							</div>
						</section>
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
		</div>
	);
}
