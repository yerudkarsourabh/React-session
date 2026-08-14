import React from "react";
import * as Components from "./Phase-1-Foundations/Module-03-Fundamentals/01-components";
import * as Event from "./Phase-1-Foundations/Module-03-Fundamentals/04-events";
import * as States from "./Phase-1-Foundations/Module-03-Fundamentals/05-state";
import * as Hooks from "./hooks/01-useState";
import * as ConditionalRendering from "./Phase-1-Foundations/Module-03-Fundamentals/06-conditional-rendering";
import * as Lists from "./Phase-1-Foundations/Module-03-Fundamentals/07-rendering-list";
import * as UseEffect from "./Phase-1-Foundations/Module-04-Intermediate/01-use-effect";
import * as UseEffectHooks from "./hooks/02-useEffect";
const App = () => {
  return (
    <div>
      {/* <Components.ComponentsExamples /> */}
      {/* <Components.ExportsExamples /> */}

      {/* <Jsx.JsxBasics /> */}
      {/* <Jsx.Fragments /> */}
      {/* <Jsx.Styling /> */}

      {/* <Props.PropsBasics /> */}
      {/* <Props.ChildrenProp /> */}
      {/* <Props.PropDrilling /> */}

      {/* <Event.OnClickBasics /> */}
      {/* <Event.EventObject /> */}
      {/* <Event.OnChangeInputs /> */}
      {/* <Event.PassingHandler /> */}

       {/* <States.StateBasics /> */}
       
       {/* <Hooks.StateString /> */}
       {/* <Hooks.StateNumber /> */}
       {/* <Hooks.StateBoolean /> */}
       {/* <Hooks.StateArray /> */}
       {/* <Hooks.StateObject /> */}

      {/* <ConditionalRendering.Ternary /> */}
      {/* <ConditionalRendering.LogicalAnd />
      <ConditionalRendering.EarlyReturn />
      <ConditionalRendering.MultipleConditions /> */}

      {/* <Lists.Keys /> */}
      {/* <UseEffect.UseEffectBasics /> */}
      <UseEffectHooks.DataFetch />
    </div>
  );
};

export default App;