import React from "react";
import "../../assets/styles/perfilUser.css";
import { Link } from "react-router-dom";

function PerfilUser({ className }) {
  return (
    <>
      <div className="input norder-2">
        <Link to="/user" className="value flex">
          <button className="value flex items-center">
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 2"
            >
              <path
                fill="#7D8590"
                d="m1.5 13v1a.5.5 0 0 0 .3379.4731 18.9718 18.9718 0 0 0 6.1621 1.0269 18.9629 18.9629 0 0 0 6.1621-1.0269.5.5 0 0 0 .3379-.4731v-1a6.5083 6.5083 0 0 0 -4.461-6.1676 3.5 3.5 0 1 0 -4.078 0 6.5083 6.5083 0 0 0 -4.461 6.1676zm4-9a2.5 2.5 0 1 1 2.5 2.5 2.5026 2.5026 0 0 1 -2.5-2.5zm2.5 3.5a5.5066 5.5066 0 0 1 5.5 5.5v.6392a18.08 18.08 0 0 1 -11 0v-.6392a5.5066 5.5066 0 0 1 5.5-5.5z"
              ></path>
            </svg>
            Public profile
          </button>
        </Link>
        <Link className="value">
        <button className="value flex items-center">
          <svg id="Line" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#7D8590"
              id="XMLID_1646_"
              d="m17.074 30h-2.148c-1.038 0-1.914-.811-1.994-1.846l-.125-1.635c-.687-.208-1.351-.484-1.985-.824l-1.246 1.067c-.788.677-1.98.631-2.715-.104l-1.52-1.52c-.734-.734-.78-1.927-.104-2.715l1.067-1.246c-.34-.635-.616-1.299-.824-1.985l-1.634-.125c-1.035-.079-1.846-.955-1.846-1.993v-2.148c0-1.038.811-1.914 1.846-1.994l1.635-.125c.208-.687.484-1.351.824-1.985l-1.068-1.247c-.676-.788-.631-1.98.104-2.715l1.52-1.52c.734-.734 1.927-.779 2.715-.104l1.246 1.067c.635-.34 1.299-.616 1.985-.824l.125-1.634c.08-1.034.956-1.845 1.994-1.845h2.148c1.038 0 1.914.811 1.994 1.846l.125 1.635c.687.208 1.351.484 1.985.824l1.246-1.067c.787-.676 1.98-.631 2.715.104l1.52 1.52c.734.734.78 1.927.104 2.715l-1.067 1.246c.34.635.616 1.299.824 1.985l1.634.125c1.035.079 1.846.955 1.846 1.993v2.148c0 1.038-.811 1.914-1.846 1.994l-1.635.125c-.208.687-.484 1.351-.824 1.985l1.067 1.246c.677.788.631 1.98-.104 2.715l-1.52 1.52c-.734.734-1.928.78-2.715.104l-1.246-1.067c-.635.34-1.299.616-1.985.824l-.125 1.634c-.079 1.035-.955 1.846-1.993 1.846zm-5.835-6.373c.848.53 1.768.912 2.734 1.135.426.099.739.462.772.898l.18 2.341 2.149-.001.18-2.34c.033-.437.347-.8.772-.898.967-.223 1.887-.604 2.734-1.135.371-.232.849-.197 1.181.089l1.784 1.529 1.52-1.52-1.529-1.784c-.285-.332-.321-.811-.089-1.181.53-.848.912-1.768 1.135-2.734.099-.426.462-.739.898-.772l2.341-.18h-.001v-2.148l-2.34-.18c-.437-.033-.8-.347-.898-.772-.223-.967-.604-1.887-1.135-2.734-.232-.37-.196-.849.089-1.181l1.529-1.784-1.52-1.52-1.784 1.529c-.332.286-.81.321-1.181.089-.848-.53-1.768-.912-2.734-1.135-.426-.099-.739-.462-.772-.898l-.18-2.341-2.148.001-.18 2.34c-.033.437-.347.8-.772.898-.967.223-1.887.604-2.734 1.135-.37.232-.849.197-1.181-.089l-1.785-1.529-1.52 1.52 1.529 1.784c.285.332.321.811.089 1.181-.53.848-.912 1.768-1.135 2.734-.099.426-.462.739-.898.772l-2.341.18.002 2.148 2.34.18c.437.033.8.347.898.772.223.967.604 1.887 1.135 2.734.232.37.196.849-.089 1.181l-1.529 1.784 1.52 1.52 1.784-1.529c.332-.287.813-.32 1.18-.089z"
            ></path>
            <path
              id="XMLID_1645_"
              fill="#7D8590"
              d="m16 23c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
            ></path>
          </svg>
          Account
        </button>
        </Link>
        <Link className="value">
            <button className="value flex items-center">
            <svg
                fill="none"
                viewBox="0 0 24 25"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                clip-rule="evenodd"
                d="m11.9572 4.31201c-3.35401 0-6.00906 2.59741-6.00906 5.67742v3.29037c0 .1986-.05916.3927-.16992.5576l-1.62529 2.4193-.01077.0157c-.18701.2673-.16653.5113-.07001.6868.10031.1825.31959.3528.67282.3528h14.52603c.2546 0 .5013-.1515.6391-.3968.1315-.2343.1117-.4475-.0118-.6093-.0065-.0085-.0129-.0171-.0191-.0258l-1.7269-2.4194c-.121-.1695-.186-.3726-.186-.5809v-3.29037c0-1.54561-.6851-3.023-1.7072-4.00431-1.1617-1.01594-2.6545-1.67311-4.3019-1.67311zm-8.00906 5.67742c0-4.27483 3.64294-7.67742 8.00906-7.67742 2.2055 0 4.1606.88547 5.6378 2.18455.01.00877.0198.01774.0294.02691 1.408 1.34136 2.3419 3.34131 2.3419 5.46596v2.97007l1.5325 2.1471c.6775.8999.6054 1.9859.1552 2.7877-.4464.795-1.3171 1.4177-2.383 1.4177h-14.52603c-2.16218 0-3.55087-2.302-2.24739-4.1777l1.45056-2.1593zm4.05187 11.32257c0-.5523.44772-1 1-1h5.99999c.5523 0 1 .4477 1 1s-.4477 1-1 1h-5.99999c-.55228 0-1-.4477-1-1z"
                fill="#7D8590"
                fill-rule="evenodd"
                ></path>
            </svg>
            Notifications
            </button>
        </Link>
        <Link to="/login" className="value">
            <button className="value flex items-center">
            <img className="w-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAA/BJREFUWEe1WOt52zAMPHiRKJM0niTOJGkmcTpJ3EniLiL0AwlKIAW+klY/8pD4OByAA0hC5SEAXPv4v987m8ur7jMHWkc3J3VW/BrQOZiu1d9ZIswlREZHFjqMqU/av4ws3HXoBrE7Uo0KQVvbug9pxLA6lHFGO+Yw8wLgIsMYeCBA/r/rtD8AbkR067JS8bBJpj4n3ibM/BPADwBPAyDuYNxA+BVAT2xJE2MzHAKQgWdlro1RdI7CDzvuHcAbESXWm2sc5WkAOTN/DDB4j0pMS/yl/+V4BaSw+7Md/ISM0T5GAvPqgbyzbBg5yWIxxC5jAYWYlRAJcWyeHWx6abNX300xahLm1WwkwM59I+MMjWk7Py0lYSDxvj12zSPQTkaszAtFVp43txVS3APtGsy4g/BileFbQJWVZTQJWnY77N6J6NGbM82odQyBtXEpbe+3MzJDvAPgWiTmOxG9lGCrgu+5j3m9ACRWH4Tbif+wVz8M1gWgzyK5zkQnVY345aijlZWZWSyX2Dz3KkwPXMkWM8u6sn4zsVyzE0O88sLAlfbKo0AVziwqJwBVwj5UwmREUJJSAYxSpa4j7s7MUhZFN1Wtw191Rh3QtZBwWM30meikJUJdX8tKxx1p6Aa0SeYI02ZMVAB+ZaTeMyfEzXrm9cqgy7E8B6xjHVCFATrR2TvjZN6Lc0VTpR/YknJbUmPlCsLT3kccmgkvysqGw4UpK50o5O/h0SLwue/Gb0SnrVJlk5ygrkVG433bMKoADWnAbAW4zmgQ4ZWlgRC58OqxrCc9pZS71BTtmTZAfpbNeYxeAJHAbeEcaC3mG83DWDKV2tI4xiib4mZLTqYuzRKqcSOyIaVuLusngyYVFOOUR9tPdGu9AzYX/GFAIjupN3CTScpoIiTU++nuybR24hoHaEfpD5/zFyHMGK8m7rP4FLO6jFrbNW63Dn6+Z6rLUvElc/s0UNfLI+Wp0RY4569Dp98H2nCZxK7fPDs8Vwq+pyxWZ+20KdcnRpUFCfx4gkxPp76nz5qgZcMsenw+0enmtd2TQPUUyngy0S21X4J/O5+38GbNTl4gDgm0FXnV4LrAFDtWdDVWq9is/Ja/bWOtc4R9aRnlQGg1Oe3txuUOrDjX9yUxMJrumGolNpVZ0RQDqlpfo9zVFE5BRdeP9I7FQHWhgA1gLIxmyd8/vgEQYf8HVzpOttpX5nyeXZIdrpp2cOFWxAU4kIhdj48QrqAlDoXhB/0twOTKUZ7qtePI+pNZ37WpMaCh+gPLjl87TtTLGkMjzNVy5muMdjLUJ6hjqSXcIX+c0cPuw/yMFq5ihxz5NxjNgVbKebb5nGn56L87g98+4kD0RgAAAABJRU5ErkJggg=="/>

            Cerrar sesion
            </button>
        </Link>
      </div>
    </>
  );
}

export default PerfilUser;
