// src/components/FashionHero.jsx
import React from "react";
import { Link } from "react-router-dom";

const FashionHero = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-blue-400 px-4 md:px-10 pb-10 pt-0 mt-0">
      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT MAIN BIG BANNER */}
        <div className="col-span-2 rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400">

          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGCAbFxcYGBsZGhsaGR0bGh0YHhgaICggGh0lIBgaITEhJSkrLi4uGCAzODMtNygtLisBCgoKDg0OGhAQGi0eHyUvLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYABwj/xABBEAABAgQEAwYEBAUBCAMBAAABAhEAAyExBBJBUQVhcQYTIoGRoTKxwfBCUtHxBxQjYuFyFTNTgpKissIWQ+Ik/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAEDAgQFBv/EACkRAAICAgIBAwMEAwAAAAAAAAABAhEDIRIxBCJBURMyYQVxkbEUFYH/2gAMAwEAAhEDEQA/ALVg32+7Qxqu5ru/7eUCMx63Pk8OSz7bxOzVCie1zTpUfrCIsK67ffKFUilWb2gZl0ZyGrSsIYstwesJNSCCaPr7fpHJd2v5Qiwcp0BMAFji00A5pHvC4tPjBO8LiSHQP70iB4qeHGtY0INKU+YDe/3aJYAT/mpiuw9vMfIxOlAEub+8NCDpIpeu0OC4Ypen2I5KCdGjRkWfOqGHW7/fWGCc5Ay23+cEUiznpHZK0+UMBq3f5QqlHYPeHGXq9Iaw5nn+/wB0gASbMUS7CHSAp9G+UOSs+h2hk2acuYCp3pAAk9DU/wAw5RUWvaBKSot4feCrL20HL9YAGrS4DgGBKb8Ip1hSRlAIq/TzvCTZoSbgD71gAAAavU8j7tHVGguLnTlBRMSzggh6VBrraOChp9+kADZk2rc9PrHKWIKUA6wGbLdQN2t9+UMRwl3L6RCxKTVi1R7xNVbyrvERanVtGWNEKcP6I5H/ANiYjIVE6dKZCwbZj8x+sRpQZm5ecZNC4VKs2rMWMFOGINTypXfXSHYZeZWzVhZqy5y05/pGjIZEtqD1McpXTlWBpSW5al4aJSTY05tGkJhhNDQk3EAEUJejj6wmbzG4jivSvp/j5QAMmTqO3s/7wITy5AB6ttf75xIVNaqgRdudKtAVTtqPdwTTekAiOcQfyEx0Swl7FumsdDAjFKDb9fMwolqeh05V8oJOkCr+ECuj+sCqlmYgbuKe7xzlhU4kpLKceXu5pDlTxTcwPCLWUAqqbkkefyb3gq8KlQoGLaQAclYLHU6w6YkZYVElQZ2KRalYXu/hYAF6wAS5xVnRtn+SYDiE1AfWCTSc6f8AUT7GBTAokUqH++sMyS0oYB2D1iWsAERVSlNlKnereTmm5pFiuYwemtr0840IJmbWHyZo3NdwRRrteBITV78+UOTMzAgN0BttaGAXv1a0+7Uh01yBZ9aREmYxQHwTDSuVB3rdoXvXJSFuTVvxaOG894YEoBQ092gapiuQHq/Sn0gRTMZ8vV1V6sBDfFlOYs2oJU3mWDwgD4YEJoAz9LvfYwqBeo/z5xGU7FiXB2dx7e1oIjEJFC+ZtaAv+3vDQBkHxO7bg89+dICiSM2bP838nNISeUgiozXAO7R0tmA1+rQmByioC45WHlaAmUtz4X9K+UHmJIbmOV4q8VOmrmKlS1S5QQgFc6afClS3ypSAQFGj1NKXeExrZJNKs1a6O3L6w4V1I2+9uXKPPsX2rxeEnqkYhaJwFUqAYKSbKBFvdo1/CeMoxCO8RT8wo4P1gp9h+C2CWG8CWGFD9Y4TKc35w1KhqBfTYmCxBEzX9IiYgkVrSIGJClqWVYsYeW+VCQEZlEXLrtXQadYxWKnTsLjTlmrmKWQPGXSpOYeh0BEF2Nxa7RvZsx5aydFH/wBTEWWguH9W+ukGnh5czqf/ABB1iJJUHH5iNiw9B7wgJciYE3Fj91jhMJBoNnc2+cNSxAYg1ZxBFyzmCMwSDUnkOusPpAk26QVFnJp7QiZYTt0v7/SAKk4aYD3GIWFjZRU7X8KxlI8mgPBseqZLOYDOhRSphSli3MfWNpoUotdk6VMA/RmblDULqQzawRQeGLBYgEPzL/WGZOzuHIP19CIYltfdreUPWhRA3d/v1hqZKhr9/rAA1ZB5dCP1jo4oB38lNHQWFDVSnrV3cX87XDaPDGZTgJNDrYfKOOIy0KavpXpVqCOM8BgpNTelH6xAqO7wgfC1g1KaQZJAIppz0paAonAEqZq+K7+nzh8qWlxW9g7BiSpw1DpABJNnHpCoDlPWEJvygklsyfVoYh8x+9lg8z7QhlHMK+nnBJwHfSwGbKr5tCzpozDpQD5w6ADipNUuW1g4Aazg6aV/eGsSoUo14kfy7tyL05HfyhpCZyQWD5Q+4d6W6XhyFEqy0CmcjkaU94cmWEgPp90gyZ6RqH6/f2I1Zkh42eiWlS5q8iUAOpRDMfe7CIfDeIYact5MxExTMcpBOW5G7awvaCYFpEsSpc1yVZZpyoKkjwh2L18qR5d2tkJkTkYjCd3LWkZlCSoKEtY1GldRbrCcl0a4Sqz2VUo1IDm21+Z0hO4U1X58/P8AWOlYxRQkkMVJdmNHDttSCImFtwNT9f23hmSq49xaTg5RmTT8RZKRdR2/UmMpwr+JEonLOQUpKqFLqCa6hq+UafjSJM9H9bC98gEhKgcxRQeMJA8L1rsObR4RjklE1aASyVEDdtIXJG5QcVZ9D4fEypqQuWsKSux60sdb0iHxDiiJCpYISZcwMJqVfCo0DpZiNXePPv4XcSXmmS3IygLS6gA7sXCqNXamZ7gRpu1mOw0xGRakolByrILMygQUhyXSGic5Uy2HEnHk+jSrAISzqSa6tuPKKWXIbFTgqX3omBOZOVwEJQliFFQA8Tvf4aDdv8PuJ95gg7+BRTW7O4fyLRJ7U4JU6UAmYEKSXVzTV08tG5iNPaMwpZKMB/EnKqZLUClOUFISkaaCn1it7GcVVJnp1SqigbEHrtF/2i7NJVh2QoBb5nUak7AXjII4Bi5YK8lE1oa01AhY03Etn8bI5coRbR7VMSDUp0cNT/EBUmpq/L9qxB7IcSGJw6CVOpNFUrS1R9YtVSBTd3PnGjkMhiZeFC5kubLzkTFTHUpQOZTeEMlgGq5Ooio45igULxGVIEpICUBqBRZIrW+oi57bpl0EtbT1NnSKugUc7VZt2ijkdljikd2hZSoqDmpDauNWv5RGvVTOzleJtI2ZW8oqa4BHQpiPgpwdlC4r5xMw2CmS5OSYnxBCUkiqXSlix/WIQwdXT6xVnGnZLCwmjlum/l9vFXxdaQuVOU6hLU4RTxVFCquUfOsWE2S4qW536xG7QzJMiTmmKNSyALlRt/nlClbRvG0pJsHh+Jy0BfdSUSjM+JQJJ3KQS1vKCcER4SpObVLGzA3HI/rFLKEyY3eG1G+7Rq8K4QkNRvKJ41cjpzvjCkEAPpCJKmu43H19o4rry6Q5cpxvqxqI6aOEaJlGe33p+kNU5Dv4duXS8GSAHYelIawBzahgwr7aQUBH7jmPY+8dCd4kE5tS7bPHQcQsCmaolVyzEJq7asaC8PWFK8QS3h8L3zbNpDUTNczJApUMbVhJbGj9RT7OkRKHSpTAqoCTaoYkag8xptBzhwAHrpTQio6Q2XLKQW1L7+f3vBUO9ag3gA6dNUlI1NNyXJDn72iThpgKkmo+9IHilGgAN9gYXCMV1Z9foPdnhoTJGJ/36W/4Zf1hkyhA2r5VudoBiVf1SB+QJY+ZMOKTmBJsKMW6wxEpE1RWA1gHa3qYlozFF2f2/SBgU6Wicj4QGpGkhMB3DManp5QsrDJU4KXcuIIDEnCkEkGoyl+mx+9I09CW2ZftthyqWRKJ76WCQkCjKIBBU4APn5Rkey/ZMz1PiiUDMGlgj+oHqk7h8tr7x6LwzAKzkzpTrX4lKC0KQCqpAAZRZsoLWEWOKkFI8AKA7nuwDMU2jmw9SeUTdXZWLk1SAL6CFUoGlwd4BKxalqZQUGtnbMRzYCK/ifG0SZmQJzZUlcwuwSkMwYXUolIH+p42mmjEoNOjKcXxqZRVJQVlQOUpZh/+ritmaPNOOzHnFOUJKaFtTv8AKN5j8XNnzQtS1FVglIYNoABUm0V3GeHySrul+Oe7TJj/AO7L1QkAsVD8RqB8Iq5iUY07OnLLlBR9zP8AYvCrm42ShAUo5vEz0TqSRYa1j2D/AOConS1S5ilVsqjgio0rF52HwciXgZIkJCUlPiOqlAkKKjqczxczlBKSzP1aKOMe2Rx8/tXuYfgvZ2ZwvDzs81ExObOnK6TVksQebWJivxalzarL6tYen6w/tFi5k8zEGhDMH0JvTpFUvi8tKQlSScpYigBFbUvr5RbFx2e/+mYEottXK/4JqglCSpn9yTtFTh8apeYnoBp+8EncRQR4VAj+4CvIpIqecWnZHDSpsnElSEqZYuB+UO20ayZFFWellyLDj5yVi9g+GqlpWfw5yG2YsCPIfKNHxGblSQkOpqPb75Q3hctEuSkJolKA/o5qaxR4Xi/ezVg0ClDu+iaKPSOdHxHk5PU+IDg/AsqpqpwClLUMxLk7gdKv5xP4jwrNJ7uWQh7KAqNX3faNDwSbhzLUVJTmzVBrQUHkwiixPGpcyaplBKQrKGs4oBS5e/N9olGnN/gpPM44El7klPE04WQO+mKUQK/iUX3frV4FipsuaBMll0m4sx5jQxkO185aZYSgASxNAUdf7a8yb84s+D4hkZQKFPUPFm7OKDcaZouDcJM8mqUoRR6k10A8veKPgPBpfEsfNmrdeEwp7uWk2mL3Lafib/RFhxPixw/CsRMTRSjkSRvMyofyDnyjVdiOEjDYGRKAY5ApXNSqq/TyjJ1NhZXZ7DJtJQeof5xZIlpSnKEJCdgA3pBWhJhYP+n1gqhOTfbKzE4LDqp3YSd0jKR6RmZmGUglJuDWl+YO0X6sUFrIFxEXjCKpXuGPlb2hRm2JFJkICqMNEg00ry1HlzjjhbqJNWJbcaxJTOfSu37Xju+SXB+R6a3ihoFMkDkev7R0PzjVQjoLCiiMwHMS6Q1yoBIBGjXAI6xxmBhSjEOQXFRUUIbXm4g6ZaMoc0d3atTS4oHpDkSwGAp5j236CIlAqAFOUrLHTk3T5w9KFDKAQzcxX9IAiUHJBIfR9jsIcEKLV+nluYACzFNSvX/MFwC6ijRCnJU/w16ueraRLwCvETsOkNCYWXNHer6C4gS5gC9fc3h8hTzJh6Q2as5/p9iGInFb5Q3X7eJiKJbMPr0rpFfLUrMLWprBVyiaksrexb7eNoyyY4CQz1+9YjDi6BNTJQsqWr8BSpJZIdy4Dg1qIc6gUuaEORlDWrXdhrEPEcHT3vfhIKiQ6lAEpAA+A6AuXFCXFWDQp21opiaT2SZuLXKC5mcrD0ACc1Lu+VPzLAGsUmJ4rPl5piFqKkjOZKj3iEi9lBJlkjYn5Rq14JBZBJJJLdct62blvAeIdnsJMlqSw8ZNUFlOSXLpL6+0RpnTyil0Jh8fKmoRNl5WJqQzjQjeI3Y/ASp4n4ichMzvJvhC0ggJSAoUP+sf9IjM8cxCZR7iWyFl/CHJAFAuzAAVd3MWn8KcapYxEtQJSlYUlT0dSQkp6slJ/wCaKY+9kcySVo2XEpUmRh50yXLloKJS1ApQkEEJJenSPmqRimmJU4qK01UT9TH0X2jQZuFxEhDmZMlLQCxyhSkkAPtWPAsf2Kx0mq8LNoR4wAtLBq+Eml76RSSIRkz1rsNxYKwiUAsZSlIIFSa5goAVqFjzeJfEMUo3WQP9KgY857Jcel4TvlzifFkSMoeqQp7ciIueIdsEqJEmROmlhXL4ahxWu8SSm+kd0PIhBbaAYri0s4yXLQSXCswU4tUX6UgvDez5nTFqUfAFFtLHe58m6xn+z2AmTccmdNQUZRmKTycD1LRp5/aCUkd2hwUrBUQWdN8vzsfR6VxYck5cY/8ATS/UHiTmn2N4h2VSCVZgABZCmHotJL/80E7Hye5w2KWXCSfC5Bcs1CPKAjiH8xMTIkSFEqVUqmFgkHxKN6ARc8QXKE2TgEEBIqqlyPExH9xcws3jzg0n38B/sHmj6uiTPQBKZ3oAddLdIyfHsV/LlC0oBNQUmgymgDjrTqY2eLT8OZzWjDWMvxOQF4iWgZATMBNsxCTmLuomwNWEJdHkZHeSiHKx5Uj+g7qHhHxXu7PYlweRhcBw1MlIKj3igLAF35OL3vFxxfi2JlzO6w6UJQlLuEpJq5YPQAdIqZfEMZNcd4ygWKTkF6ioDaxz3k5Ooo7VgxuKUpaK7jxm4hCZSZK05jmrc5PFVnYAD1IgfA1LDZXbn92jXI4RiJf9Uzlkp/CC6cpTV0vXfyigwzShOTbIopFXcaD0I3i0eVers5c8IR+zosOJTu9wMlJ+BWNlJX0zFxyqPePSZPE8/wAAfo31jzXs7w1eJ4fi5TnMSlUvktLqT7pHvF52S7WIMhLyVZ6hYoAFA+IVrQvpCkzcE5LRslz5guG6qH0iJ/tQu3y/y0Qk9p0qOVMmpsApyfIJihx3bRIOWXkzH8ozH1NHhU30alBx+7RbTiE4grBLLAfqNbD71idxJOaVmF01Z25O+0ZjDz5qwTOlrSt3ClggEaaCrUs0anh00KSHqFBiOtxBxcJbJ2n0Uag9iwe2h9fpDZiA1dhroNtoTGyEy5ipbkVcVNQKj2Y0hGSLpFLRc0KVDQ9YSEVJlm4+Y/eFgArwlw24YX9Xr6naDSGFKs4r91fXzgcxiSGJ9fYiGkEb8muw5EUiBUmKUARbkPR+Z8oCQMwKsop+Vw2ocG8RpRzZfiIJvUAWoXu5gxBdzpaxp0H1gAMsjQ7WLiCYIHNegFTEdVxcHZ9N2r9Ik8PXU9Pum0NAxcOfFMIOoHtAw5Wda66W/eG4WZWYWpm0ryhZamWdHPyDfbQCJ0mUAqlKMBRvJqiJdPL1+cRZSnVSt69KQSbKW6QCNXNX5Af5jaMsmBDu7NXm/X9oSelkMlLildqvQa7Q2TLWCWfm+v09IlBBKeesaYk6ZTIK5iwhD5lp8ajZCHBU26lUA84s5fD0o+EgHVTaCyRsPnDOBgZph5t5Xh3FVaAteOejtbt0YXtqibNngSJSlLCSgqAIFfF8ViwfXUiN92c4fLw0tEpAYZaq1UosVKPMs/ptGN41xUypRJABAKZeYBaFs6lApFUq8fxecbdIdKeg9WiuMhmVF3KI0tYR55/FLtgJUtWGlKBmK/3hSQcoNpf+o6jY841PHeI9xhVTSoJNgS1BqQDc6ADUx59wfAy8UufjjKsMqHA+K6lDTNYZusUbt8USjH08mZ7geAShCk4iWkrV41BQqglByJrrRJIP5uUX0iV/MTUyAmYiWkHxjKlKSbKYhldKG5FogcVooTZyVTBM/KashOWr3+ImkKcYrIZqCEAk5lFDAvZIDkqLWSHalKR6eJS+h6VTOGfH69yto0MjAysLJXLSsLnrZstggEBIHNyHPQaRleM4VSfCMMhSqeOWsqLmgceesWXYqVMXPnTppNAkJzXuTRL+ECl3ib2oxHdqzF18wkEp50ABbyPPSH4imnKUuw8jJHlCMeiy4KjD4KSoOkYgj+oXYOADkRyBag1jDScdMTiBPUQVlYUo/i5s2jOILhcem5ClOHGZdK6sBz13isxkqYtZmZWQLqNE+uvlG/HwTjynl23/AEVy5YSqMNJf2erYuYsKShCMwKSSrNZmd9zUMOrmkVvZzBBc9c9aUhhkQRqLKPyHrB0Y1SZcrLk8UlzmJBKsoYAaOczmLTBoyJSGLgNbz+ceM2k6KrE+XNmWTMGJMwmU8xB8KxaxYEE3Ga2pTDJa0IWiakpqgS5qAGVmSHM3ZiCKn2gGJw60YmbKRNMt1d7S6kkAAVoQNusWGF4YJqpYyApS63mlkOSDRFm8Q3hlAnDeLTziESkJWZRSUpWQG8QLHckMNd4gdpcMUTElSfiSArKBVVVJGUkAXUHfYaRZdoAEd0mZMKfECqYhLZQ7VUTmAG4IvSI3HcGEypqFTe8oVIBOdWVIBSsH8rvf6QexiStE3sDiU95PlpStIEtKlZxlq6gKAnnEVPCVmYtEpSZfeTFLJCQSlgXBcFnJSfKkG7Czx36gxdclwBbwlJblf5xY90UlRBGbMoFyNC+p6ekPFFOeyKk1C0VM7s1NM6UteKWMigPD+ZNlNYOWoG1jQcNwsqR/upCEm5maualyS49Yp8bOmMQylAkGm4Li/ONDw4GY5cJbX4lP/aD8PVh+vY4JInybZKnSETh/VuAahwADcbEUir4bPSDlQpJQaoO46mLxchNBRXXKK77e0Z3FFSVM/wDUBNWoK0FAzC3Qxz5YqUSse6JnHsMSEzAW/Cr5g3HP2itEkcv8fZi8w07vpKkFAFGcWzCrtpUbxn0JOwOxsWPNqMdohF6LIKpKNSB5t9Y6AmUdFIG7gFz5wsa0PZFKy1A2zDygS3UcrkaktTqKFy+7Q9OLQq01JL3zAV9bR384h/jlnlmq+94iUApSJZAKVE+bOfy6E6t9YOiUCQctRuKj9IcZoc5SitwVJI6tm5fvEU8RlgeKYkAXGZJDixpb2gAz03tahyk4clj+e5BvaDSe3SU3w6mbRY/SMcVOSdyTDJsWUFRFzdnqnZ/FCfJ71KCApR8JIcMd4myS9W1o4PrGa7K8RQnCoQFeIFRNt+o3i6kTxvybOn6G8SZVFxhFgKDm9B1vf7tExaA7n0iqwqilRJCBoKgmn/N9vE3/AGikDMqjPWlLPr0jSoTLN2PtDD16xXI4rLNAsEXNdwzCohycalwAQTa7nncl7W6Q7FRMkpCCpqlasxGwZj8iYgT8SiYlSkk0ps7QuLXNmJKJEpXiLKmEgCtCALk+3WK3GpTKQJUs5lAsovTMPwhud4i2dsI6RG4jwReJlICEoL50qWpTd3mWjMQliStpbC1zvGsQcoCE1IZID1ow9WjOdm+JDIpM1kTEnxpoHJFFOaEEB3G0X/CsVKXOShKnIqag2rvyisGc2VO2XmOwaFS8igCOY94zfGWlyu7TTNQDlvGgxePFkDOd/wAI/XyjPTsOZiitZqaudEj5R0ROZmM/iDgVpw2GyEh1KSW1zAED/tMT8TgDJkIHdlITLCQogkJoHYtcn7pGkxYkzVCSSM0tQVloSMod+hSfQxRdu+NjL3aVU/F0jcfL+mkkrH/ifV7dIzfZHGDvpiWNa5j1rR+SaxZcfWjxKWpLJvRy7PlD0zHziL2exUrLkRLAmAZpq8rlifCKFyq7AXcdRV9oAqYS4bICSgGkvUJ/1aqNyTHqeNJzjyqrPPzY6y1fRV4iT3JlJV8M2TLnJ/tMxLkeoLxFmTVJLpJBFuvlGn7fYaWJGDWgjMhCZaquQCgKD+ivWMiJwsoWhePm5Q2zplBJnqwwZmHDzUh0ZEEHNYhIcMxowT1rUUi7lTDqCKxR9mOIpGGkpmKSCEApGYHwtS1rs16RZKx0t6LT/wBYb5/bR4eSPGTOxT5RX4KPtlh055U3KoknKVDStHIqxeBdk5qllalqcpWUgKDskEspKakOwoOUXWMnypkqYgrSygcrqTQ/hIL6Fj5RC4Zw8SsH3qwXyOQHAKtXWDRyLjSCImWHEMOVlL4tKAEl0ISCtzZqqNPK8UcnDgSrlThTkggkncKqCW19Ifw/jaspmFImEqYZElwnR1rfMVFg+whcPIAS3hdSnIzAgFzS+kEugRA/hojLj0oNT3Ciu3hV/TJT5EiNhie77+bKBTmSyik1ICxQ/wDbHkvFMdkxpWmwYKALPRlCJGC44JMxKkd4UskLzEZjl5g1oTDx3GSYstST3s9Exk0oSrKQFaFtTyjY4GVlQkMaDWpfUnmbxjeHgTpkkJYpJC66pAzfSNvMMdWSVnNCNA8ROYEuzRkpkwkl399a33i34ziPC2qiw+sUCiHzZjXZvv8AeJZNRKQ3Il4bj0vDLQZkwJRNfxH4QoNR9CXtyMClYiVNUVyc5llaspKSkDfyezwzFSJa5a0TQ6CKgjW7guAC+0dg1yZaMqCAlNtSN2PtHMXSVEuWftiISATMYl/j8g1PWEh2FGW/lAKpUAedetdIKiW7EtbSGBIL/wBT1YkvfTpARiEl00NGtR/0jJomKlXcAgjl6xQ8RlMhTAXvaLSXOsm/ow9/t4p+OYlqAU8oEJmflw3EQFlKJZRAGggeL7yjrUWi16IVs03Z1Dobc1tb0jV4fDAKzUd6W+9YyHZ3PoCSAGjWtMzEkfFo1m1LHzjFWVskLWQ1Hrp+m0CnT3IBoxr6U++sTMFMAOgIYMQQGfl91EBxU1JVlo9XOo/x0hJDASgKjn8/faJWFw5XOSkVdTU0e3OlawJYKRWh1oT6jS46NF/2XlFImTWZPwouXJ+LU7AQNaHHbomY5SkTVJSCod0QV5jnS3/k/P3jM8YlldEAskEAJLaHMpxqD8om8T4mrxSkqS6iHUPwAXCjYl6+VYjTZILJ0B8TG7c3uImlZ0zlwSKjho76SlYAUsApLatdhy+IbgtcCPQOw/CEJkmYUeJaiH/tSwAro4NI84x8lUrEJUE5EBJUWoxdjU2Iyj1G8ew8G8OFkv8A8NJOlVAKNNLxvEtkvI6TO4gU/DqesVvFkpTLKSWK6U0Gvlp5xOmTkodaiOXPpGek4j+YmLqHAcDlZo6Lo5aDTeGKCpakpDsUKL3TcF/Jm6Rje0GCCitO3U1q3lSN4meZckqUfhcD75RksHLMwKmkUUos7tlFLDm8c81cjqhJxxmQ4QlQ8aBMCkBld2wJIcOSqgABsXfba2RxKXMw00CSJawkuwYGh0FH5RIOG7pUyWpmUcw2IIp1q48opzhVGalCTlC1JSrZswNfJ497xFXjpv4PI8hqedokdqMK2HOZgwR8wIxiSBRYNLGPR+2yf/5FhmylOlwVJYPHnaCD4T5RzeDuD/c68vZouy7KQUuzGnLX6mLDELIUgEuFOAWsq7dD8+sV3YuUFTlSwHJRmT1SQ/sqNbjOErVL8LZgpKkuaOFVB8njl8mPHM1Lpm4fboqjhHSNn133jQzcShUvIqfLKQhikpTmDUDOD4g1q20hJ+CUUFCQxIIe7GwLOLbQPgmNXMZKZcrweFaSB4spyuFs2nwkCOWJRhOFKSuSkGcJiSFIKTKyMUMAkgWcEAE1cg7xCSUlRKE5U5jlSzMBb75xB4mucmZiCUhEsZe7yliSHZCn+Jk1cM1NIsMBLUpCSkFRIu2pvyv8o099GVo8v4yWxU4f3/NoVNQBGj492Axc6cuajuiFGxWxsBs3vCcO/h5jELSoplhj+f3oI0r+DDqza/w0+FzTKhv+ov8AQxuZpeMh2X4ZNkCYJhS6spGUv8OZ7gbiNehdIrG6MyezO8b8IUXdQSw3cv8AqIxS5BT8W2wOwblpGy4vhStagpTurw12AofWK2bwgswTs5Jv9IznTtDwtUzLCS5JbqWoNdKvCqEvLQuTtvtp0jS/7JUFKIAYl6D6xGTwNQplSdbV+2pHPxZbkijTLSQ+Yj0+pjo0R4QSAyB6QkHFhyQ3/wCOoJck/KJEjgKBQA8qn5RbykEA/Kn0rC96LtXZo6eESPJlajgcsH4A/Mn5PEhHApQqZUs9QImpWSDcdaej/pHKzkVamhZ/Jg1YdJCtleey+FUXMiSf+QfWD4fgGGRUSpQ6ITbe1YkJQp6kNygndoO/r+ogtBQgwkpmyob/AEj9IYjBy38ISOgaChKRo/WH5wLabfrCtDpgk4Qfk9RDDwWWa92gHcO/W8SgeRig7WYDFzkp/l1MAKpzZS+72PqIWg2H4xhJElBXNU5FcmqyAwDOD5uA2sZ/DfxB/miMPLkLQWbKitrpAFAOZO2sYPicvFSSoLStB1Kkkf8AdY9Y0f8ADFaJXfTlHxEhKUgOfCHKv+4Dyic4p6RTHNxZtMF2dExAVmVKBskp8fm5pEqR2ZQn/wC1Z2AAHze8BXxhegFtf8QbAcY+JE9LoWGdLhSeYavmKwJJaCUnJ2yk/iNgZMvBFK1KVMUQJQJAq9VMNAAX9IncM7UTZkvDSZOIRMOQd9MyjKAkDN4WDbAdIwnbbs7Nws0z1Z8TLU+WfmehFpgynKWcbFnpaLP+G2FEqQZ5BzzCQCE/gBpXmXPptBJbHGXd7PRcUELU5JIP5RZrQKXgZL+ETHNCxa/T7pEAcRGsxKQCArM/gf4SphRJtmsDF7hFIlKBJCyedAC1XZjo27xtpqtdk01T30Zv+IPERJw2WSczeHJ+JzbqKFyLMYldmsXIxOFlTUoLKSAoBR8Kk0Um+hEUvaXgEvETlqM9SZb1RLQ6zooBajlALelLUiw4VhkSJQlSJapaAXZa8yiTck+lAdIUoxUtDU5NJSGdqJKRNllKWzIULFYLEFmB/uNfq0Zjg4C8ZLBDp71jXcbiNPx0FWQkEsFOQCQHbW1xELgy0pmSpSBmIzLmTCCkAmzOA40flHrYpqPjb+GcMlefWyz7bYOWMDOITlLJPxE1CkgR4ypBePaO0snvcLNQtVMua9PCQrTpHnSMPKQHKgDqXL9LRPwoKWN/uXyz4sd/DnDrVjpatEhWZ9sp+pEev9wNEo9P8Rh/4ehJVOnpHhDS0k02Uo/+PvGyXPNGJjl8qvqUt0Ux3QdSAEkkIoCXbYbxiONJ7mRnlhJE1ToTmLnM63e9SfaNPxPEEy8oWUKUQE6lTVKWqS4Bs3URRcYXOdPdSZYZTCYs51ILaJFAdHqekcxVFb2owswSpcnIpQIzqupTqAcK1DJTf+7SLPsHiVZShY8AFNVBWxSf7WtFf2jwkyZlEyctK8ilFSSQZpYeEsRZwG1flFb2HxqxOky60d0NXKBRalEUFT1he4HppKftJhO9TyhCqFM3k8bMHBqny+/WJciwF4igul2o9fL79oIFsAftosuiLfqMd2gxfcT0TEeKpKx+ZJLeVEv5RpcNMTNQFoV4TalRGR7SLR/MKQXISGcXDklm1vDuzuJEtYQFEIXZ6V6WBr5iNyXJGYujVqlc7buIEqWoE2PmYQzW1LdBHd6rSo6GObkzopA2Xv8AKvrHQVK1HQe4joOTDiCzUbM8PDCxgwmHdhD2uSSYYAgHtX75Q7IrnBX/ACgsYRP2IABgHmfvrBUyeR82hUncD1qIJLlg1VYc4AGTJQAcgAQPvRoK+kMxMxSi5DDS0NwqCQ9vmBDrQgqwq1APX2gE3AoWPEVeSlJ+VvWD94eUHC3FgTCGVf8AsDCn4pKVv+clf/kSIkSMBJSMqJUtI2SgDraJKjCh+u4EIYLuQLAN0HpA1qA/A+giQp9IchfQQqAqpy55+CUkA3zEMX3S1YWRgVhISAhCQGSlIYAbAaeUWme/36QNYJuKcrmHQFbM4OMwXnAUBQs7g3QoWUk2YxScQkT5CwmQVBEwZO7UomWCfhyF/CB+Qiz3YRpJuDJbxEB9P3gB4NLzOQVHmpXydoalJKkwSjdyVg1yEgDMtSiBVRNSbE/dIbiOB4idJUrCLlpU7PMeoarMKGt9InDCIT8KA3Ife8QcacpzIVOQoW7sqb/pHhPmIyMwWL4RxXChhJxS1WUvvDNQRslCSfU16Rb9jJa+7XOxKZnelTNMCgUpFqKqxcmL+X2ixwLJkLm7FaEo9SCn5QXEnEz2XMQmUwbKFZhrr5xrnLjxvXwZUVd+5B4tw0YuUZQxQwxBFwHWKsPiTR60jMzeyyZKwnEYxKwQcpRL8ThmuSG+3jYTeDAgBfi3GUH5wkvhqU/CNNABblDhlnD7XQ2k+yHwDLh5IlpJXUqKmZyo6jyA8os045XTrA+62toICogVVmyiqsoctqw1MYbbdsaJfDuHzcVOJzd3KlgMsVKlKugDSlzzEVfa1WKwuISmU8zvk1V3edkpYCh8INTUjSNdwPtVg5gTKlnuzZKVMPeofrWIHbJKipGWlFV9D9YXsGwfDuBInys89OZbMD+LUioazwKThU4dP9NOUFRGY1J1qo1IFbw2V2jngBCpMspFAQtSSwp8JSfnELG42ZMV4lBKAXCABTqTU+3SHoRYJxm5eFVj07PFXmSNX2t9/vHd7LTVZOUVIAqQNKbwkNmo4akqQ4oCKvYXiHO4kkE5SMqQb6tc+cEnpnkJSUyxJUBQZkEbAkPFNxzhClSyJQVLWKlCqhY2SsFjHXFHLJ7K3j3DkzimYEOrK676gM5s8VC+BzSgiWFpIILOmnPMKCnONFwzHz5RZSARRw7EEAAg0q1YWdiMRNW4aWgBghIehuXI9miPOrLcEybg0qTKQmYrMtKQFK3I5w8zB6aCAS5Z1Ol720h5Q4evrs0SeynQ7vW0J6R0DSk8z7QsIZYmiqbQRNQXrCx0UZgSfZPWEWliOcdHQkA86He8Nxij3aRoVH2hY6GuwZHSIkYXT70MLHQ2JBU2JYW2gyE2H1jo6EaHTywJER5ayVEG1KdY6OhAKRfrAlqNOkdHQCJCCwppDT8X3vHR0MYImiusMlE5rn15x0dAIPIDhT6W944oGV9aR0dCYxhvrQbwOcY6OgA6SHd4AioL7fUx0dCQCTEgB2uK+8CnC3T6R0dAxmW7V4RAld4EgL/MKerX84lYLHTJmAkKWsqVmWHNSwZg+sdHRlDEkrJFTpBpUsOnqdTuf0hY6ABe7G23zEFVKDimv0EdHQxHoKkDIKcvKMPxviE1ExMpKyEF3T0UGreFjoti6ZHJ2gT667+cOBqYWOiJb2BTVH5e4h4qEk846OhDDFALhrFh7R0dHQzJ/9k="
            alt="left-banner"
            className="absolute bottom-0 right-0 w-44 md:w-72 object-contain pointer-events-none"
          />

          <div>
            <h3 className="text-sm font-semibold opacity-80">Hot looks, cant-miss prices</h3>
            <h1 className="text-4xl font-bold mt-3 leading-tight">
              Up to 40% off<br />fresh fits
            </h1>
          </div>

          <Link
            to="/products/fashion"
            className="mt-6 bg-white text-blue-600 font-semibold px-6 py-2 rounded-full w-fit shadow"
          >
            Shop now
          </Link>
        </div>

        {/* RIGHT TOP BANNER */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjO-HhvRBfnvpfFND6-VLGVdCaNBkn1rybOQ&s"
            alt="furniture"
            className="absolute bottom-0 right-0 w-32 md:w-40 object-contain"
          />

          <h1 className="text-xl font-bold mb-3">Furniture Deals & more</h1>

          <Link
            to="/products/Home"
            className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold w-fit shadow"
          >
            Shop now
          </Link>
        </div>

        {/* RIGHT BOTTOM LEFT BANNER */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-300 rounded-2xl p-6 text-white relative overflow-hidden">

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJF_vcLiX9eUXrP3tuyDFqehpv9YK5xzXwIg&s"
            alt="character"
            className="absolute bottom-0 right-0 w-28 md:w-36 object-contain"
          />

          <h1 className="text-xl font-bold">
            Up to 40% off <br /> Character Shop
          </h1>

          <Link
            to="/products/Tablets"
            className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold w-fit shadow"
          >
            Shop now
          </Link>
        </div>

        {/* RIGHT BOTTOM RIGHT BANNER */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-300 rounded-2xl p-6 text-white relative overflow-hidden">

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSawhLWPefgTs4sr3KzQmurZK-eBgrW_F5S6Q&s"
            alt="pjs"
            className="absolute bottom-0 right-0 w-28 md:w-36 object-contain"
          />

          <h1 className="text-xl font-bold">
            Up to 40% off <br /> Sports Items
          </h1>

          <Link
            to="/products/Sports"
            className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold w-fit shadow"
          >
            Shop now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default FashionHero;
