<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Design Dashboard</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/skeleton.css">
    <link rel="stylesheet" href="css/ns.css">
    <link rel="stylesheet" href="css/fonts.css">
    <META HTTP-EQUIV="refresh" CONTENT="60">
</head>
<body>

<div class="pane two" style="background:red" data-pane-time="2000">
    <p>Pane one</p>
</div>

<div class="pane three" style="background:blue" data-pane-time="2000">
    <p>Pane two</p>
</div>

<div class="pane ns" data-pane-time="2000">
    <header class="ns__header"><h1 class="ns__header-title"><span class="js-skeleton-remove skeleton-text skeleton-long"></span></h1></header>
    <section class="ns__body">
        <table class="ns__departures"  cellpadding="0" cellspacing="0">
            <thead>
                <tr>
                    <th class="ns__departures-head">Vertrek</th>
                    <th class="ns__departures-head">Naar/Opmerkingen</th>
                    <th class="ns__departures-head">Spoor</th>
                    <th class="ns__departures-head">Trein</th>
                    <th class="ns__departures-head"><!-- { Tijd } --></th>
                </tr>
            </thead>
            <tbody class="js-departures-list ns__departures-list">
            <?php
            for ($x = 0; $x <= 15; $x++) {
                ?>
                <tr class="js-skeleton-remove ns__departure">
                    <td class="ns__departure-timeinfo js-ns-dept-timeinfo" data-time="{ VertrekTijd }">
                        <span class="js-ns-dept-time ns__departure-time">
                            <span class="skeleton-text skeleton-short"></span>
                        </span>
                        <span class="js-ns-dept-time ns__departure-delay"></span>
                    </td>
                    <td class="ns__departure-destination-info">
                        <span class="ns__departure-destination"><span class="skeleton-text skeleton-long"></span></span>
                        <span class="ns__departure-destination-route"><span class="skeleton-text skeleton-mid"></span></span>
                        <span class="ns__departure-destination-note hidden" data-text="{ RouteOpmerking }"></span>
                    </td>
                    <td class="ns__departure-track">
                        <p></p>
                    </td>
                    <td class="ns__departure-company">
                        <span class="skeleton-text skeleton-short"></span>
                    </td>
                    <td class="ns__departure-type ns__departure-type__{ TreinSoort }"><span class="skeleton-text skeleton-mid"></span></td>
                </tr>
                <?php
            }
            ?>
            </tbody>
        </table>
    </section>
    <div class="hidden">
        <table class="js-template-departure">
            <tr class="ns__departure">
                <td class="ns__departure-timeinfo js-ns-dept-timeinfo" data-time="{ VertrekTijd }">
                    <span class="js-ns-dept-time ns__departure-time"></span>
                    <span class="js-ns-dept-time ns__departure-delay" data-time="{ VertrekVertraging }">{ VertrekVertragingTekst }</span>
                </td>
                <td class="ns__departure-destination-info">
                    <span class="ns__departure-destination">{ EindBestemming }</span>
                    <span class="ns__departure-destination-route">{ RouteTekst }</span>
                    <span class="ns__departure-destination-note hidden" data-text="{ RouteOpmerking }"></span>
                </td>
                <td class="ns__departure-track">
                    <p>{ VertrekSpoor }</p>
                </td>
                <td class="ns__departure-company">
                    NS
                </td>
                <td class="ns__departure-type ns__departure-type__{ TreinSoort }"></td>
                </td>
            </tr>
        </table>
    </div>
</div>

<!-- external libs -->
<script src="js/moment.js"></script>
<script src="js/moment-timezone-with-data.js"></script>

<!-- customer JS -->
<script src="js/util.js"></script>
<script src="js/ajax.js"></script>
<script src="js/dom.js"></script>
<script src="js/skeleton.js"></script>
<script src="js/panes.js"></script>
<script src="js/ns.js"></script>
<script src="js/app.js"></script>
</body>
</html>