# NG7 CONFIRM
![](https://s3.gifyu.com/images/chrome-capture.gif)

# Installation

```npm install ng7-confirm --save```

Step 1. Import Ng7ConfirmModule in module where you want it

```
import { Ng7ConfirmModule } from 'ng7-confirm';

imports: [
    BrowserModule,
    Ng7ConfirmModule
]
```

Step 2. Add ng7Confirm directive to the element

```
<a ng7Confirm
   (onConfirm)="confirm()"
   (onCancel)="cancel()"
>delete</a>
```

Optional inputs:


```
<a ng7Confirm
    continue="Continue right?"
    cancel="Just cancel"
    title="This is title"
    question="Question for user"
    (onConfirm)="confirm()"
    (onCancel)="cancel()"
>delete</a>
```