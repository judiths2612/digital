////When you want to pass value between fields of the same type, open your notepad and copy the code provided below:

//function(){

//window.addEventListener('load', function () {

//    var sourceControlId = 41171190, /** THE ID OF THE SENDER CONTROL */

//        targetControlId = 41171191, /** THE ID OF THE RECEIVER CONTROL **/

//        sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId),

//        targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

//    sourceControlInstance.on('value-change', function () {

//        targetControlInstance.setValue(sourceControlInstance.getValue());

//    });

//    targetControlInstance.setValue(sourceControlInstance.getValue());

//});

//} ; 


//When you want to pass value between fields of different types, open your notepad and copy the code provided below:

function(){

window.addEventListener('load', function () {

    var sourceControlId = 62908167, /** THE ID OF THE SENDER CONTROL */

        targetControlId = 62924756, /** THE ID OF THE RECEIVER CONTROL **/

        domAbstractionLayer = loader.getDOMAbstractionLayer(),

        sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId);

    sourceControlInstance.on('value-change', function () {

        domAbstractionLayer.setControlValueById(

            String(targetControlId),

            domAbstractionLayer.getControlValueById(

                String(sourceControlId)

            )

        );

    });

    domAbstractionLayer.setControlValueById(

        String(targetControlId),

        domAbstractionLayer.getControlValueById(

            String(sourceControlId)

        )

    );

});

}; 