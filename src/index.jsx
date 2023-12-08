import { StrictMode, useRef } from "react";
import { createRoot } from "react-dom/client";
import { useButton } from "react-aria";
// import { useButton, useTextField } from "react-aria";

function Button(props) {
    let ref = useRef(null);

    let { buttonProps } = useButton(props, ref);

    return (
        <button {...buttonProps} ref={ref}>
            {props.children}
        </button>
    );
}

// function TextField(props) {
//     let { label } = props;
//     let ref = React.useRef(null);
//     let {
//       labelProps,
//       inputProps,
//       descriptionProps,
//       errorMessageProps,
//       isInvalid,
//       validationErrors
//     } = useTextField(props, ref);

//     return (
//       <div style={{ display: 'flex', flexDirection: 'column', width: 200 }}>
//         <label {...labelProps}>{label}</label>
//         <input {...inputProps} ref={ref} />
//         {props.description && (
//           <div {...descriptionProps} style={{ fontSize: 12 }}>
//             {props.description}
//           </div>
//         )}
//         {isInvalid && (
//           <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
//             {validationErrors.join(' ')}
//           </div>
//         )}
//       </div>
//     );
//   }

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <div>
            <h1>Testing React Aria tree-shaking without TerserPlugin</h1>
            <div>
                <Button onPress={() => alert("Button pressed!")}>Press me</Button>
                {/* <TextField label="Email" /> */}
            </div>
        </div>
    </StrictMode>
);
