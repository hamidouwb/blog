import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, g as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index2.js";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<dotlottie-player src="https://lottie.host/686c0216-9676-4bbf-ac0b-be626dbf24fa/uVy640JbOo.json" background="transparent" speed="1" style="width: 150px; height: 150px;" class="fill-current text-black dark:text-white" loop autoplay data-svelte-h="svelte-1nslerv"></dotlottie-player>`;
});
const YoutubeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["width", "height", "className"]);
  let { width = "24" } = $$props;
  let { height = "24" } = $$props;
  let { className = "" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  return `<svg${spread(
    [
      { viewBox: "0 -3 20 20" },
      { version: "1.1" },
      { xmlns: "http://www.w3.org/2000/svg" },
      {
        "xmlns:xlink": "http://www.w3.org/1999/xlink"
      },
      { width: escape_attribute_value(width) },
      { height: escape_attribute_value(height) },
      { class: escape_attribute_value(className) },
      escape_object($$restProps)
    ],
    {}
  )}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>youtube [#168]</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="currentColor"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]"></path></g></g></g></g></svg>`;
});
const GithubIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["width", "height", "className"]);
  let { width = "24" } = $$props;
  let { height = "24" } = $$props;
  let { className = "" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  return `<svg${spread(
    [
      { viewBox: "0 0 20 20" },
      { version: "1.1" },
      { xmlns: "http://www.w3.org/2000/svg" },
      {
        "xmlns:xlink": "http://www.w3.org/1999/xlink"
      },
      { width: escape_attribute_value(width) },
      { height: escape_attribute_value(height) },
      { class: escape_attribute_value(className) },
      escape_object($$restProps)
    ],
    {}
  )}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>github [#142]</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="currentColor"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></g></svg>`;
});
const IconLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { target = "_self" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);
  return `<a class="p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"${add_attribute("href", href, 0)}${add_attribute("target", target, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const darkmode = writable(false);
const SunIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["width", "height", "fill", "className"]);
  let { width = "24" } = $$props;
  let { height = "24" } = $$props;
  let { fill = "#000000" } = $$props;
  let { className = "" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0) $$bindings.fill(fill);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  return `<svg${spread(
    [
      { height: escape_attribute_value(height) },
      { width: escape_attribute_value(width) },
      { version: "1.1" },
      { id: "Layer_1" },
      { xmlns: "http://www.w3.org/2000/svg" },
      {
        "xmlns:xlink": "http://www.w3.org/1999/xlink"
      },
      { viewBox: "0 0 504.123 504.123" },
      { fill: escape_attribute_value(fill) },
      { class: escape_attribute_value(className) },
      escape_object($$restProps)
    ],
    {}
  )}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path style="fill:#FF7900;" d="M252.062,394.768c-78.816,0.008-142.698-63.882-142.698-142.706 c-0.024-78.824,63.882-142.706,142.698-142.706c78.832,0,142.714,63.89,142.714,142.706S330.878,394.768,252.062,394.768z"></path><path style="fill:#FF5500;" d="M352.981,151.142c55.745,55.729,55.745,146.101,0,201.83c-55.729,55.745-146.07,55.745-201.823,0"></path><circle style="fill:#FFAA00;" cx="252.077" cy="252.069" r="69.908"></circle><g><path style="fill:#FF9700;" d="M202.65,202.642c27.301-27.294,71.554-27.294,98.855,0c27.294,27.309,27.294,71.554,0,98.863"></path><path style="fill:#FF9700;" d="M256,43.355c0,1.938-2.001,3.505-3.923,3.505l0,0c-1.946,0-3.954-1.568-3.954-3.505V3.521 c0-1.946,2.009-3.521,3.954-3.521l0,0C253.999,0,256,1.575,256,3.521V43.355z"></path><path style="fill:#FF9700;" d="M256,500.618c0,1.938-2.001,3.505-3.923,3.505l0,0c-1.946,0-3.954-1.568-3.954-3.505v-39.834 c0-1.946,2.009-3.521,3.954-3.521l0,0c1.922,0,3.923,1.575,3.923,3.521V500.618z"></path><path style="fill:#FF9700;" d="M402.141,106.977c-1.371,1.371-3.6,1.363-4.962,0l0,0c-1.394-1.386-1.394-3.608-0.024-4.978 L425.33,73.83c1.371-1.378,3.6-1.371,4.978,0l0,0c1.355,1.371,1.371,3.6,0,4.978L402.141,106.977z"></path><path style="fill:#FF9700;" d="M78.801,430.309c-1.363,1.363-3.592,1.363-4.962,0l0,0c-1.378-1.386-1.378-3.616-0.008-4.978 l28.16-28.168c1.378-1.371,3.608-1.371,4.986,0l0,0c1.363,1.371,1.371,3.608-0.008,4.978L78.801,430.309z"></path><path style="fill:#FF9700;" d="M460.784,256c-1.946,0-3.521-2.009-3.521-3.938l0,0c0-1.953,1.575-3.938,3.513-3.938h39.841 c1.938,0,3.505,1.985,3.505,3.938l0,0c0.016,1.93-1.567,3.938-3.505,3.938H460.784z"></path><path style="fill:#FF9700;" d="M3.521,256C1.583,256,0,254.204,0,252.274l0,0c0.016-1.946,1.583-3.631,3.521-3.616l39.826-0.063 c1.946,0.016,3.521,1.772,3.529,3.718l0,0c0,1.922-1.583,3.686-3.529,3.686H3.521z"></path><path style="fill:#FF9700;" d="M397.154,402.141c-1.371-1.371-1.355-3.608,0-4.978l0,0c1.386-1.378,3.608-1.378,4.978-0.008 l28.176,28.176c1.378,1.363,1.371,3.592-0.016,4.97l0,0c-1.355,1.371-3.584,1.378-4.962,0.008L397.154,402.141z"></path><path style="fill:#FF9700;" d="M73.83,78.809c-1.371-1.378-1.371-3.608,0-4.978l0,0c1.386-1.371,3.616-1.378,4.97,0l28.168,28.152 c1.371,1.378,1.371,3.6,0.008,4.994l0,0c-1.378,1.363-3.616,1.371-4.986-0.024L73.83,78.809z"></path><path style="fill:#FF9700;" d="M150.772,69.545c0.961,1.686,0.378,3.836-1.292,4.797l0,0c-1.694,0.977-3.86,0.402-4.813-1.276 l-19.905-34.493c-0.977-1.686-0.402-3.844,1.292-4.813l0,0c1.67-0.969,3.828-0.394,4.797,1.3L150.772,69.545z"></path><path style="fill:#FF9700;" d="M379.4,465.558c0.969,1.67,0.37,3.82-1.292,4.789l0,0c-1.694,0.969-3.844,0.402-4.813-1.276 l-19.921-34.493c-0.969-1.694-0.386-3.836,1.292-4.805l0,0c1.678-0.969,3.828-0.402,4.813,1.284L379.4,465.558z"></path><path style="fill:#FF9700;" d="M309.492,51.365c-0.504,1.883-2.45,2.985-4.324,2.489l0,0c-1.875-0.504-2.985-2.434-2.481-4.301 l10.319-38.479c0.496-1.875,2.434-2.993,4.293-2.481l0,0c1.867,0.496,3.001,2.426,2.497,4.301L309.492,51.365z"></path><path style="fill:#FF9700;" d="M191.141,493.056c-0.52,1.867-2.45,2.985-4.309,2.481l0,0c-1.883-0.512-3.001-2.45-2.497-4.309 l10.319-38.479c0.488-1.867,2.434-2.985,4.317-2.489l0,0c1.851,0.496,2.977,2.442,2.473,4.317L191.141,493.056z"></path><path style="fill:#FF9700;" d="M434.586,150.749c-1.709,0.985-3.844,0.394-4.813-1.276l0,0c-0.977-1.701-0.394-3.844,1.292-4.805 l34.493-19.921c1.678-0.985,3.812-0.394,4.805,1.3l0,0c0.961,1.662,0.402,3.812-1.3,4.797L434.586,150.749z"></path><path style="fill:#FF9700;" d="M38.581,379.384c-1.694,0.961-3.844,0.386-4.813-1.284l0,0c-0.953-1.694-0.394-3.86,1.292-4.813 l34.477-19.921c1.694-0.961,3.844-0.386,4.829,1.3l0,0c0.961,1.678,0.386,3.836-1.3,4.797L38.581,379.384z"></path><path style="fill:#FF9700;" d="M452.758,309.484c-1.875-0.504-2.97-2.458-2.473-4.324l0,0c0.496-1.875,2.418-2.977,4.293-2.473 l38.495,10.311c1.859,0.488,2.985,2.426,2.473,4.301l0,0c-0.496,1.875-2.434,3.001-4.309,2.497L452.758,309.484z"></path><path style="fill:#FF9700;" d="M11.075,191.134c-1.875-0.504-2.977-2.442-2.473-4.301l0,0c0.488-1.883,2.434-3.009,4.293-2.489 l38.479,10.295c1.875,0.512,2.993,2.434,2.489,4.332l0,0c-0.504,1.859-2.434,2.993-4.324,2.465L11.075,191.134z"></path><path style="fill:#FF9700;" d="M73.066,144.644c1.678,0.969,2.261,3.127,1.268,4.805l0,0c-0.953,1.686-3.119,2.269-4.797,1.292 L35.06,130.828c-1.709-0.977-2.276-3.127-1.3-4.805l0,0c0.977-1.686,3.143-2.269,4.821-1.284L73.066,144.644z"></path><path style="fill:#FF9700;" d="M469.079,373.28c1.686,0.961,2.229,3.135,1.284,4.797l0,0c-0.992,1.686-3.127,2.269-4.805,1.308 l-34.493-19.921c-1.686-0.977-2.269-3.119-1.292-4.813l0,0c0.953-1.662,3.111-2.253,4.813-1.284L469.079,373.28z"></path><path style="fill:#FF9700;" d="M201.437,49.538c0.496,1.883-0.622,3.805-2.473,4.309l0,0c-1.883,0.496-3.82-0.607-4.317-2.473 l-10.319-38.479c-0.496-1.875,0.614-3.805,2.473-4.301l0,0c1.867-0.496,3.805,0.599,4.317,2.473L201.437,49.538z"></path><path style="fill:#FF9700;" d="M319.795,491.221c0.496,1.875-0.63,3.805-2.497,4.309l0,0c-1.875,0.496-3.805-0.614-4.309-2.473 l-10.303-38.487c-0.496-1.867,0.607-3.797,2.473-4.309l0,0c1.867-0.504,3.82,0.614,4.317,2.489L319.795,491.221z"></path><path style="fill:#FF9700;" d="M359.463,73.059c-0.969,1.694-3.119,2.261-4.797,1.292l0,0c-1.686-0.977-2.269-3.119-1.292-4.805 l19.905-34.493c0.961-1.694,3.127-2.261,4.829-1.284l0,0c1.662,0.953,2.237,3.104,1.26,4.805L359.463,73.059z"></path><path style="fill:#FF9700;" d="M130.844,469.063c-1,1.686-3.127,2.253-4.797,1.292l0,0c-1.694-0.985-2.292-3.135-1.308-4.805 l19.889-34.493c0.985-1.686,3.135-2.261,4.844-1.284l0,0c1.67,0.961,2.253,3.119,1.26,4.797L130.844,469.063z"></path><path style="fill:#FF9700;" d="M454.569,201.437c-1.875,0.496-3.797-0.63-4.309-2.497l0,0c-0.496-1.875,0.599-3.781,2.489-4.293 l38.479-10.319c1.859-0.504,3.781,0.607,4.293,2.473l0,0c0.52,1.875-0.599,3.812-2.473,4.324L454.569,201.437z"></path><path style="fill:#FF9700;" d="M12.895,319.787c-1.875,0.496-3.797-0.622-4.293-2.489l0,0c-0.496-1.875,0.599-3.805,2.458-4.301 l38.479-10.327c1.89-0.488,3.805,0.607,4.324,2.497l0,0c0.496,1.867-0.599,3.812-2.505,4.309L12.895,319.787z"></path></g><g><circle style="fill:#FFAA00;" cx="252.069" cy="83.653" r="3.994"></circle><circle style="fill:#FFAA00;" cx="252.069" cy="420.478" r="3.994"></circle><circle style="fill:#FFAA00;" cx="371.153" cy="132.986" r="4.001"></circle><circle style="fill:#FFAA00;" cx="132.986" cy="371.161" r="4.001"></circle><circle style="fill:#FFAA00;" cx="420.486" cy="252.077" r="3.994"></circle><circle style="fill:#FFAA00;" cx="83.669" cy="252.069" r="3.994"></circle><circle style="fill:#FFAA00;" cx="371.153" cy="371.161" r="4.001"></circle><circle style="fill:#FFAA00;" cx="132.986" cy="132.994" r="4.001"></circle><path style="fill:#FFAA00;" d="M171.331,104.22c1.103,1.906,0.441,4.356-1.465,5.451c-1.914,1.111-4.348,0.457-5.467-1.465 c-1.087-1.906-0.441-4.348,1.481-5.451C167.771,101.66,170.212,102.313,171.331,104.22z"></path><circle style="fill:#FFAA00;" cx="336.266" cy="397.942" r="4.001"></circle><circle style="fill:#FFAA00;" cx="295.621" cy="89.403" r="4.001"></circle><circle style="fill:#FFAA00;" cx="208.494" cy="414.72" r="3.994"></circle><circle style="fill:#FFAA00;" cx="397.942" cy="167.873" r="3.994"></circle><path style="fill:#FFAA00;" d="M108.229,339.74c-1.914,1.111-4.372,0.441-5.459-1.465c-1.119-1.922-0.449-4.356,1.457-5.451 c1.914-1.118,4.348-0.465,5.467,1.465C110.773,336.187,110.143,338.629,108.229,339.74z"></path><circle style="fill:#FFAA00;" cx="414.72" cy="295.7" r="4.001"></circle><circle style="fill:#FFAA00;" cx="89.411" cy="208.486" r="3.994"></circle><circle style="fill:#FFAA00;" cx="106.22" cy="167.857" r="3.994"></circle><circle style="fill:#FFAA00;" cx="397.942" cy="336.266" r="3.994"></circle><path style="fill:#FFAA00;" d="M212.354,88.371c0.567,2.119-0.701,4.309-2.828,4.892c-2.15,0.575-4.324-0.709-4.892-2.828 c-0.599-2.135,0.685-4.324,2.828-4.884C209.566,84.968,211.771,86.237,212.354,88.371z"></path><path style="fill:#FFAA00;" d="M299.52,413.704c0.551,2.135-0.701,4.317-2.828,4.876c-2.135,0.583-4.324-0.67-4.892-2.804 c-0.551-2.135,0.701-4.324,2.828-4.899C296.739,410.325,298.953,411.577,299.52,413.704z"></path><path style="fill:#FFAA00;" d="M339.747,108.213c-1.118,1.906-3.545,2.56-5.443,1.465c-1.93-1.111-2.591-3.545-1.465-5.451 c1.087-1.914,3.505-2.568,5.435-1.465C340.173,103.865,340.842,106.307,339.747,108.213z"></path><path style="fill:#FFAA00;" d="M171.331,399.911c-1.119,1.914-3.529,2.568-5.451,1.481c-1.938-1.118-2.576-3.552-1.481-5.459 c1.103-1.922,3.56-2.568,5.49-1.465C171.756,395.563,172.449,397.997,171.331,399.911z"></path><path style="fill:#FFAA00;" d="M415.791,212.346c-2.143,0.559-4.348-0.701-4.915-2.828c-0.583-2.135,0.709-4.324,2.828-4.892 c2.135-0.567,4.324,0.693,4.907,2.836C419.17,209.573,417.91,211.763,415.791,212.346z"></path><circle style="fill:#FFAA00;" cx="89.411" cy="295.621" r="3.994"></circle></g></g></svg>`;
});
const MoonIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["width", "height", "fill", "className"]);
  let { width = "24" } = $$props;
  let { height = "24" } = $$props;
  let { fill = "#000000" } = $$props;
  let { className = "" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0) $$bindings.fill(fill);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  return `<svg${spread(
    [
      { height: escape_attribute_value(height) },
      { width: escape_attribute_value(width) },
      { version: "1.1" },
      { id: "Layer_1" },
      { xmlns: "http://www.w3.org/2000/svg" },
      {
        "xmlns:xlink": "http://www.w3.org/1999/xlink"
      },
      { viewBox: "0 0 512 512" },
      { fill: escape_attribute_value(fill) },
      { class: escape_attribute_value(className) },
      escape_object($$restProps)
    ],
    {}
  )}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path style="fill:#FFD960;" d="M431.211,158.822c-0.445-1.372-1.631-2.371-3.056-2.578l-33.631-4.887l-15.038-30.474 c-0.639-1.293-1.955-2.111-3.396-2.111c-1.443,0-2.759,0.819-3.397,2.111l-15.042,30.474l-33.629,4.887 c-1.426,0.207-2.611,1.206-3.058,2.578c-0.445,1.37-0.073,2.875,0.958,3.882l24.337,23.719l-5.743,33.494 c-0.245,1.42,0.338,2.857,1.507,3.704c1.164,0.848,2.711,0.959,3.986,0.287l30.08-15.813l30.077,15.813 c0.555,0.293,1.16,0.435,1.764,0.435c0.785,0,1.565-0.243,2.228-0.723c1.166-0.848,1.751-2.284,1.507-3.704l-5.743-33.494 l24.333-23.719C431.286,161.696,431.658,160.192,431.211,158.822z"></path><g style="opacity:0.2;"><path style="fill:#231F20;" d="M372.54,179.944l-24.337-23.719c-0.896-0.876-1.292-2.124-1.091-3.336l-23.089,3.355 c-1.426,0.207-2.611,1.206-3.059,2.578c-0.445,1.37-0.073,2.875,0.958,3.882l24.337,23.719l-5.743,33.494 c-0.245,1.42,0.338,2.857,1.507,3.704c1.164,0.848,2.711,0.959,3.986,0.287l20.873-10.973L372.54,179.944z"></path></g><path style="fill:#231F20;" d="M344.245,232.445c-2.529,0-4.945-0.786-6.99-2.273c-3.684-2.671-5.497-7.13-4.723-11.628 l5.023-29.292l-21.287-20.746c-3.264-3.189-4.415-7.856-3.009-12.185c1.416-4.34,5.092-7.438,9.598-8.092l29.415-4.275 l13.157-26.655c2.013-4.086,6.099-6.626,10.659-6.626c4.554,0,8.638,2.537,10.656,6.62l13.156,26.66l29.416,4.275 c4.513,0.656,8.189,3.757,9.597,8.094c1.412,4.323,0.259,8.996-3.008,12.181l-21.284,20.748l5.024,29.297 c0.773,4.488-1.039,8.945-4.729,11.627c-2.055,1.487-4.468,2.269-6.988,2.269c-1.926,0-3.843-0.474-5.543-1.372l-26.297-13.826 l-26.311,13.831C348.081,231.971,346.167,232.445,344.245,232.445z M376.09,199.997c1.295,0,2.589,0.31,3.769,0.93l22.345,11.748 l-4.267-24.881c-0.45-2.628,0.421-5.308,2.329-7.169l18.077-17.621l-24.984-3.631c-2.638-0.383-4.92-2.04-6.099-4.431 l-11.171-22.636l-11.173,22.637c-1.18,2.391-3.46,4.048-6.1,4.431l-24.983,3.631l18.079,17.62c1.909,1.861,2.781,4.542,2.33,7.17 l-4.266,24.88l22.344-11.746C373.5,200.306,374.795,199.997,376.09,199.997z"></path><path style="fill:#3A5D74;" d="M249.58,365.11c-39.989-42.275-64.512-99.335-64.512-162.12c0-80.834,40.655-152.16,102.62-194.683 c-3.22-0.124-6.453-0.206-9.702-0.206C141.071,8.1,30.086,119.088,30.086,255.999S141.071,503.9,277.986,503.9 c65.208,0,124.524-25.19,168.781-66.353c-8.456,0.918-17.041,1.403-25.738,1.403c-58.434,0-111.908-21.241-153.12-56.423"></path><g style="opacity:0.2;"><path style="fill:#231F20;" d="M300.304,492.662c-136.913,0-247.9-110.99-247.9-247.901c0-92.391,50.549-172.969,125.494-215.609 C90.845,67.618,30.086,154.707,30.086,255.999c0,136.912,110.985,247.901,247.9,247.901c44.516,0,86.282-11.748,122.39-32.295 C369.769,485.133,335.919,492.662,300.304,492.662z"></path></g><path style="fill:#231F20;" d="M277.986,512c-68.38,0-132.669-26.629-181.019-74.981c-48.352-48.351-74.98-112.639-74.98-181.019 S48.614,123.333,96.966,74.98C145.317,26.629,209.604,0,277.986,0c3.035,0,6.31,0.069,10.016,0.213 c3.488,0.135,6.499,2.49,7.468,5.845c0.969,3.354-0.32,6.953-3.198,8.928c-62.056,42.584-99.105,112.867-99.105,188.005 c0,58.486,22.124,114.085,62.297,156.554c3.075,3.251,2.932,8.376-0.318,11.451c-3.252,3.075-8.378,2.932-11.451-0.318 c-43.03-45.491-66.728-105.042-66.728-167.687c0-72.193,31.924-140.194,86.47-186.354c-125.48,7.543-225.252,112.02-225.252,239.364 c0,132.226,107.574,239.801,239.8,239.801c52.75,0,103.388-17.167,144.94-48.759c-0.633,0.004-1.266,0.008-1.896,0.008 c-58.045,0-114.292-20.727-158.379-58.363c-3.402-2.904-3.806-8.017-0.902-11.42c2.903-3.401,8.017-3.806,11.419-0.902 c41.157,35.135,93.668,54.483,147.862,54.483c8.21,0,16.575-0.456,24.864-1.355c3.471-0.376,6.79,1.512,8.24,4.686 c1.451,3.175,0.704,6.92-1.851,9.297C404.773,487.665,342.873,512,277.986,512z"></path><circle style="fill:#FFD960;" cx="360.365" cy="325.244" r="24.794"></circle><g style="opacity:0.2;"><path style="fill:#231F20;" d="M360.359,325.24c0-9.175,4.988-17.181,12.397-21.469c-3.648-2.111-7.879-3.325-12.396-3.325 c-13.694,0-24.795,11.101-24.795,24.794s11.101,24.793,24.795,24.793c4.518,0,8.749-1.214,12.396-3.325 C365.348,342.42,360.359,334.415,360.359,325.24z"></path></g><g><path style="fill:#231F20;" d="M360.36,358.132c-18.138,0-32.895-14.756-32.895-32.893c0-18.138,14.757-32.894,32.895-32.894 c18.137,0,32.893,14.756,32.893,32.894C393.253,343.377,378.497,358.132,360.36,358.132z M360.36,308.545 c-9.206,0-16.695,7.49-16.695,16.694c0,9.205,7.49,16.693,16.695,16.693c9.205,0,16.693-7.488,16.693-16.693 C377.053,316.034,369.566,308.545,360.36,308.545z"></path><path style="fill:#231F20;" d="M490.014,273.316c0,9.563-7.75,17.315-17.315,17.315c-9.562,0-17.313-7.752-17.313-17.315 c0-9.564,7.752-17.314,17.313-17.314C482.264,256.002,490.014,263.751,490.014,273.316z"></path></g></g></svg>`;
});
const DarkmodeButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkmode, $$unsubscribe_darkmode;
  $$unsubscribe_darkmode = subscribe(darkmode, (value) => $darkmode = value);
  $$unsubscribe_darkmode();
  return `<button class="p-2 text-purple-8000 dark:text-yellow-200">${$darkmode ? `<div>${validate_component(SunIcon, "SunIcon").$$render($$result, { class: "w-8 h-8 fill-current" }, {}, {})}</div>` : `<div>${validate_component(MoonIcon, "MoonIcon").$$render($$result, { class: "w-8 h-8 fill-current" }, {}, {})}</div>`}</button>`;
});
const MainHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="fixed z-10 top-0 inset-x-0 border-b bg-white dark:bg-dark-background dark:border-gray-800"><nav class="flex items-center justify-start max-w-5xl mx-auto px-4 h-24"><a href="/" class="mr-auto">${validate_component(Logo, "Logo").$$render($$result, { class: "w-10 h-10" }, {}, {})}</a> <div class="flex space-x-1 items-center">${validate_component(DarkmodeButton, "DarkmodeButton").$$render($$result, {}, {}, {})} ${validate_component(IconLink, "IconLink").$$render(
    $$result,
    {
      href: "https://www.youtube.com/channel/UCMIHeP1K0dfx3JTPpwrWqfw",
      target: "_blank"
    },
    {},
    {
      default: () => {
        return `${validate_component(YoutubeIcon, "YoutubeIcon").$$render($$result, { class: "w-8 h-8 fill-current" }, {}, {})}`;
      }
    }
  )} ${validate_component(IconLink, "IconLink").$$render(
    $$result,
    {
      href: "https://github.com/Waraba2",
      target: "_blank"
    },
    {},
    {
      default: () => {
        return `${validate_component(GithubIcon, "GithubIcon").$$render($$result, { class: "w-8 h-8 fill-current" }, {}, {})}`;
      }
    }
  )}</div></nav></header>`;
});
const ThemeInitializer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_darkmode;
  $$unsubscribe_darkmode = subscribe(darkmode, (value) => value);
  $$unsubscribe_darkmode();
  return `${$$result.head += `<!-- HEAD_svelte-16qx5hx_START --><script data-svelte-h="svelte-77ieyc">window.prefersDarkmode = false; // global variable for darkmode

    if (localStorage.theme === "dark" ||
      (!localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      window.prefersDarkmode = true;
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }<\/script><!-- HEAD_svelte-16qx5hx_END -->`, ""} ${slots.default ? slots.default({}) : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  data.pathname;
  return `${validate_component(ThemeInitializer, "ThemeInitializer").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainHeader, "MainHeader").$$render($$result, {}, {}, {})} <main class="mx-auto max-w-5xl pt-24">${slots.default ? slots.default({}) : ``}</main>`;
    }
  })}`;
});
export {
  Layout as default
};
