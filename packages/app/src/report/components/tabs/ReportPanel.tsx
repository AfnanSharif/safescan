import { Theme } from "@mui/material";
import { FC, PropsWithChildren, ReactNode } from "react";
import { makeStyles } from "tss-react/mui";

export const ReportPanel: FC<PropsWithChildren<ReportPanelProps>> = ({
  title,
  children,
}) => {
  const { classes } = useStyles();

  return (
    <div>
      <div className={classes.header}>
        {title}
      </div>
      <div className={classes.main}>{children}</div>
    </div>
  );
};

const useStyles = makeStyles()((theme: Theme) => ({
  header: {
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "space-between",
    paddingInline: theme.spacing(1),
    paddingBlock: theme.spacing(2),
    gap: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  main: {
    display: "grid",
    position: "relative",
    minHeight: "50vh",
  },
}));

interface ReportPanelProps {
  title: ReactNode;
}
